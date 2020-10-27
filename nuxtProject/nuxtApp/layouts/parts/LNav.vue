<template>
	<v-card
    class="wrap mx-auto -fixed -z-30 -bg-b-base2"
    elevation="4"
  >
    <v-navigation-drawer
      class="-bg-b-base2"
      width="100%"
      permanent
      v-ripple
    >
      <v-list
				rounded
			>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          nuxt
					:to="link"
        >
					<v-list-item-icon>
						<v-icon>{{ icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content
            class="pcElement"
          >
						<v-list-item-title>{{ text }}</v-list-item-title>
					</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
	data: () => ({
		items: [
			['mdi-email', 'Inbox', '/'],
			['mdi-account-supervisor-circle', 'Howto', '/howto'],
			['mdi-clock-start', 'Clock-in', '/noji'],
		],
	}),
}
</script>

<style lang="scss" scoped>

.wrap {
  position: relative;
  width: 20vw;
  max-width: 180px;
  height: calc(100vh - 120px);
  top: 122px;
  @media #{$sp} {
    width: 75px;
  }
}
.v-list-item__content {
	margin-left: 1em;
}

</style>