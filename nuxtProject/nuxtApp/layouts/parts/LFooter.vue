<template>
	<v-card
		class="wrap -flex -justify-end -fixed -bottom-0 -bg-white"
	>
		<v-btn
			v-for="icon in icons"
			:key="icon"
			class="mx-4"
			dark
			icon
		>
			<v-icon size="24px">
				{{ icon }}
			</v-icon>
		</v-btn>

	</v-card>
</template>

<script>
export default {
	data: () => ({
		icons: [
			'mdi-facebook',
			'mdi-twitter',
			'mdi-linkedin',
			'mdi-instagram',
		],
	}),
}
</script>

<style lang="scss" scoped>

.wrap {
	width: 100%;
	height: 160px;
}

</style>