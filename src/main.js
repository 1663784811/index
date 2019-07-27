import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import "@babel/polyfill";
import "../assets/common/css/reset.css";
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import iEditor from 'iview-editor';

Vue.use(iView);
Vue.use(iEditor);
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
