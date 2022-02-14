import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import components from './core/lazy_use'
import wechatTitle from './utils/wechat-title'

createApp(App)
  .use(store)
  .use(router)
  .use(components)
  .use(wechatTitle)
  .mount('#app');
