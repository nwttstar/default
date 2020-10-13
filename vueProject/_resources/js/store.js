import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
	},
	gatters: {
		count(state) {
      return state.count
    }
	},
  mutations: {
    increment (state) {
      state.count++
    }
	},
	actions: {
		calc (context) {
			context.commit('increment')
		}
	}
});