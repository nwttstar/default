<template>
  <div>
	<p>A area</p>
		<router-link to="/A/C" class="mr-3 no-underline">Carea</router-link>   
		<router-view></router-view>
	<div>
		{{ getNumbers }}
		<v-btn @click="calc">
			count     
		</v-btn>
	</div>
  </div>
</template>

<script>
/* mapHelper */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	methods: {
		...mapActions([
	  		'calc'
		]),
	},
	computed: {
		...mapState([
			'count'
		]),
		getNumbers() {
			return this.count;
		},
 	}
}
</script>

<style lang="scss" scoped>

p {
	font-size: 20px;
}

</style>