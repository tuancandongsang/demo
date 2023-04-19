import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/index"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/index.scss';

const vueApp = createApp(App)
vueApp.use(router);
vueApp.use(Antd)
vueApp.mount('#app')
