import { createApp } from "vue";
import router from "@/router/index.js";
import Main from "@/components/Main.vue";

// 在根元件(Main)的樣版中，可使用 RouterView、RouterLink 兩個標籤
createApp(Main).use(router).mount("#app");