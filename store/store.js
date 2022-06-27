// store/store.js
import Vue from 'vue';
import Vuex from 'vuex';

// 安装 Vuex
Vue.use(Vuex);

// 创建 store 
const store = new Vuex.Store({
	state: {
		msg: 'vuex 成功运行...'
	}
})
export default store
