import { createRouter, createWebHistory } from "vue-router";  // 網址/a/b/c

// path → component
const routes = [
  { path: '/', 
    component: () => import('@/pages/HomeView.vue'),
    meta: {
      title: '首頁',
      requiredLogin: false

    }
   },
  { path: '/about', 
    component: () => import('@/pages/AboutView.vue'),
    meta: {
      title: '關於我們',
      requiredLogin: true  //要登入才可以瀏覽

    }
   },
  { path: '/post/:id', 
    component: () => import('@/pages/PostView.vue'),
    meta: {
      title: '文章頁面',
      requiredLogin: false

    }
   }
];

// 建立 router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // vite 設定檔中的 base: /tjd101/g1/
  routes: routes
});

router.beforeEach(async (to, from, next) => { // 記得加第三個參數 next
  //console.log(to);   // 連到目前的網址的物件資料
  //console.log(from); // 從哪個網址連過來的物件資料

  if(to.meta.requiredLogin){
    
    // ======= 以下要取得使用者目前的登入狀態，會是 bool == //
    // 取得是否已登入，可能是從 localStorage 抓資料或從後端判斷。
    // let isAuthenticated = true;

    const res = await fetch("https://notes.webmix.cc/login_test/login.php");
    const data = await res.json();
    let isAuthenticated = data.login_status;
    
    // ============================================== //

    if(isAuthenticated){
      document.title = to.meta.title;
      next();
    }else{ // 未登入，就直接導回到首頁或其它頁面。
      next("/");
    }
  }else{
    document.title = to.meta.title;
    next();
  }
  
});

// 匯出 router
export default router;