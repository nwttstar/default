const state = () => ({
	visitedTime: null,
	nowTime: null,
	clockTime: null
})

const mutations = {
	SET_TIMER(state) {
		state.nowTime = Date.now();
    state.clockTime = (state.nowTime - state.visitedTime);
		if( state.visitedTime ) return;
		state.clockTime = 0;
		state.visitedTime = Date.now();
	},
}

const actions = {
	setTimer(context) {
		context.commit('SET_TIMER')
	},
}

const getters = {
	visitedTime(state) {
		return state.visitedTime
	},
	nowTime(state) {
		return state.nowTime
	},
	clockTime(state) {
		return state.clockTime
	},
}


export default { state, mutations, actions, getters };