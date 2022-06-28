export default {
	namespaced: true,
	state() {
		return {
			classname: '暂不设置'
		}
	},
	mutations: {
		changeclassname(state, name) {
			state.classname = name
		}
	}
}
