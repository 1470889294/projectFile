import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import "amfe-flexible"
import { Tabbar, TabbarItem,Rate,NavBar,Tab,Tabs,Sidebar,SidebarItem,Form,Field,Button,Toast,Tag } from 'vant';
import "vant/lib/index.css"
Vue.config.productionTip = false
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Rate)
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast)
Vue.use(Tag)
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
