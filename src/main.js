import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// 引入 pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// swiper
import "swiper/scss";
import "swiper/scss/pagination";
import BaiduMap from 'vue-baidu-map-3x';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(BaiduMap, {
  ak: 's7CZkvbQgnN7cx1KOnddaLrvdnBQU9Jm'
})
app.use(pinia);
app.mount("#app");

// PWA
navigator.serviceWorker.addEventListener("controllerchange", () => {
  // 弹出更新提醒
  
  ElMessage("站点已更新，刷新后生效");
});
