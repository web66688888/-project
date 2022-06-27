import App from './App'
import 'utils/http.js'
// #ifndef VUE3
import Vue from 'vue'
import store from './store/store'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app,
	}
}
// #endif