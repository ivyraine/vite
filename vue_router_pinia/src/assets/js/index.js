import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router/index.js";
import Main from "@/components/Main.vue";

const pinia = createPinia();

createApp(Main).use(router).use(pinia).mount("#app");

// 在根元件(Main)的樣版中，可使用 RouterView、RouterLink 兩個標籤
createApp(Main).use(router).mount("#app");

//https://notes.webmix.cc/login_test/login.php

//fetch 非同步

// fetch("https://notes.webmix.cc/login_test/login.php")
//     .then((res)=>{
//         // console.log(res);
//         if(res.ok){
//             return res.json();
//         }
//     }).then((data) => {
//         console.log(data);
//     });

//await fetch 同步

// let res = await fetch("https://notes.webmix.cc/login_test/login.php");
// let data = await res.json();
// console.log(data);

