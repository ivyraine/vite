# 環境變數的主要作用是將敏感資訊或環境相關的配置從程式碼中分離出來，優點如下:

## 安全性：
  ### 像 API 密鑰、資料庫 URL 或其他敏感資訊不應該直接寫在程式碼中，因為這些資訊可能會被公開（例如上傳到 GitHub）。環境變數讓你可以將這些資訊儲存在 .env 檔案中，並透過 .gitignore 避免它被傳送到到版本控制。
## 環境配置：
  ### 在不同的環境（開發、測試、執行）中，每個應用可能需要不同的配置。例如，開發環境可能連接到本地的 Firebase 模擬器，而執行環境則需要連接到實際的 MySQL。環境變數讓你只需切換 .env 檔案的內容，而不需要修改程式碼。
## 易於維護：
  ### 如果配置都分散在程式碼中，未來需要更改時會很麻煩。環境變數將這些配置集中管理，方便維護和更新。
## 移植性：
  ### 當其他開發者或部署到不同伺服器時，只需要根據環境設置正確的 .env 檔案，程式碼就能正常運行，無需大幅修改。
# --------------------------------------------------------------------------------

# Vite 支援 .env 檔案，並且提供了一個簡單的方式來管理環境變數。

## 步驟：
  1.建 .env 檔案
    在專案的根目錄建 .env 檔案，並根據環境需要建立多個檔案，例如：
    .env：預設環境變數（所有環境通用）
    .env.development：開發環境專用
    .env.production：執行環境專用
    類推

    Vite 會根據啟動時的模式（mode）自動載入對應的 .env 檔案。
    例如:
    npm run dev 會載入 .env.development
    npm run build 會載入 .env.production

  2.撰寫環境變數
    在 .env 檔案中，環境變數以 key=value 的格式撰寫，
    Vite 的規範會要求所有前端環境變數必須以 VITE_ 開頭（否則前端程式碼無法直接存取）。

    .env.development
    .env.production

  3.在 Vue 使用環境變數
    環境變數透過 import.meta.env 來存取。
    只要變數名稱以 VITE_ 開頭，它就會自動被引入到前端程式碼中。

    [JavaScript]
    import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export { auth };

    呼叫 Express 後端 API：
    [JavaScript]
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    export async function fetchData() {
        const response = await fetch(`${API_BASE_URL}/some-endpoint`);
        return response.json();
    }

  4.在後端（Express）中使用環境變數
    Express 本身不會讀取 .env 檔案，你需要使用 dotenv 套件來載入環境變數。

    先安裝 dotenv: npm install dotenv

    然後在 Express 中使用： Express 的入口檔案（例如 app.js），盡早載入 .env 檔案
    [JavaScript: app.js]
    require('dotenv').config();
    const express = require('express');
    const app = express();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    但後端的 .env 檔案不需要以 VITE_ 開頭，因為這些變數只會在後端使用
    # 後端的環境變數
    PORT=3000
    FIREBASE_ADMIN_CREDENTIAL_PATH=/path/to/service-account.json

  5.在 .gitignore 內加入
    .env
    .env.development
    .env.production

    解釋:
    執行 npm run dev（開發），Vite 會自動載入 .env.development
    執行 npm run build（打包之後的執行環境），Vite 會自動載入 .env.production

  6.在資料庫中也可以使用環境變數
    
  7.前後端分離時對於環境變數的區分
    前端使用的環境變數必須以 VITE_ 開頭，並且會被打包到 dist 資料夾內的 JavaScript 檔案中，表示並不是完全安全的（即使沒有 .env 檔案，這些值仍可能被反編譯出來），所以關於後端操作最好在後端處理，而不是直接暴露給前端。

    Firebase Admin SDK（例如管理資料庫或驗證用戶），應該使用「服務帳戶」金鑰，並將路徑儲存在環境變數中，而不是直接寫。
    // app.js
    const admin = require('firebase-admin');
    const serviceAccount = require(process.env.FIREBASE_ADMIN_CREDENTIAL_PATH);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });

  8.如果使用很多個環境變數，優先順序為: .env.development 或 .env.production > .env
    