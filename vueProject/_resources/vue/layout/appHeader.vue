<template>
	<header class="-fixed -w-full -top-0 -left-0 -bg-b-2">
		header

		<app-header-nav>
			<router-link
				to="/A"
			>
					<v-btn>Router</v-btn>
			</router-link>
		</app-header-nav>
	</header>
</template>

<script>
/* Vuetify */
import { 
	VBtn
} from 'vuetify/lib'

export default {
	components: {
		/* Layout */
		/* Vuetify */
		VBtn,
	},
}
</script>

<style lang="scss" scoped>

</style>