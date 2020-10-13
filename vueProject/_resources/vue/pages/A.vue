<template>
  <div>
    <p>A area</p>
		<router-link to="/A/C" class="mr-3 no-underline">Carea</router-link>   
		<router-view></router-view>
		
  </div>
</template>

<script>

export default {

	beforeRouteLeave (to, from, next) {
			console.log('test');
			next();
			
		}
}
</script>

<style lang="scss" scoped>

p {
	font-size: 20px;
}

</style>