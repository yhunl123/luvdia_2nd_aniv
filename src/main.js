import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router/index";
import store from "./store";
import VueCookies from "vue-cookies";

const app = createApp(App)

app.use(router) // 라우터 사용
app.use(VueCookies)
app.use(store)
app.mount('#app')
