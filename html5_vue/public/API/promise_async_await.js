√ 非同步的寫法有很多種，我們統稱為「AJAX」


------------------------------------
synchronous vs asynchronous
- synchronous: one at a time 一個指令執行「完」才執行下一個
- asynchronous: more one at a time 執行一個指令之後，立刻執行下一個指令

JavaScript 大部分指令是 synchronous，但有些語法會造成 asynchronous
ex. 事件聆聽、setInterval()、setTimeout()、AJAX
------------------------------------
何謂 callback? 函數裡面呼叫的函數
------------------------------------
何謂 Promise 物件?
- ES6
- return resolve or reject
- 執行 Promise 確保執行完一定會有回應: resolve(成功完成) 或 reject(未完成)
- 語法:
    const promise = new Promise((resolve, reject) => {
        resolve(res){ }     // 成功時候的處理函數
        reject(why){ }      // 失敗時候的處理函數
    })

    promise.then(() => {}).then(() => {})....
------------------------------------
------------------------------------
------------------------------------
