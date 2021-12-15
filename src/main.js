import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/i18n'
import store from './store/index';
import '@/assets/css/main.css'
import '@/assets/js/main.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')

export default app