import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as mdb from 'mdb-ui-kit';
import VueResizeText from 'vue-resize-text';
import * as textfit from 'textfit'

for (const component in mdb) {
  Vue.component(component, mdb[component]);
}
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(textfit)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueResizeText)
new Vue({
  render: h => h(App),
}).$mount('#app')
