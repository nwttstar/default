<template>
	<div class="wrap -w-screen -h-screen">

		<app-header/>

		<main class="content-box -fixed -inset-0 -mx-auto -my-100">
				<router-view></router-view>
		</main>
		
		<app-footer/>

	</div>
</template>

<script>
/* Layout */
import appHeader from './layout/appHeader.vue'
import appFooter from './layout/appFooter.vue'
/* Vuetify */
import { 
	VBtn
} from 'vuetify/lib'
/* mapHelper */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	components: {
		/* Layout */
		appHeader,appFooter,
		/* Vuetify */
		VBtn,
	},
	data() {
		return {
		}
	},
	methods: {
		back() {
			window.history.length > 1
				? this.$router.go(-1)
				: this.$router.push('/')
		},
	},
	
}
</script>

<style lang="scss" scoped>

.content-box {
	width: 800px;
	height: 500px;
	border: 1px solid #fde08e;
}

</style>