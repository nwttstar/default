<template>
	<header>
		<v-card
			class="wrap -fixed -pt-15 -pr-18 sp:-pl-8 -z-10 -bg-white"
		>
			<h1 class="site-title -text-center">
				<nuxt-link to="./">
					<span class="-block -leading-none">
						M<span class="pcElement">aster</span><br><span class="-text-f-base2">M</span><span class="pcElement">ind</span></span>
				</nuxt-link>
			</h1>
		</v-card>
	</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
.wrap {
	height: 160px;
	width: 20.5vw;
}
.site-title {
	font-family: 'Black Han Sans', sans-serif;
	font-size: 48px;
	text-shadow: 2px 2px 1px #eee;
}
.v-sheet {
	border: none;
}

</style>