import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import ElementPlus from 'element-plus'
import './assets/base.less'
import 'element-plus/dist/index.css'
// import ZTBtn from 'zt-vue3-component/zt-ui/zt-ui.umd.js'
console.log('张涛20240417')
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
// app.use(ZTBtn)
app.mount('#app')
