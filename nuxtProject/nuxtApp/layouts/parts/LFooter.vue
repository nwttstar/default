<template>
	<v-card
		class="wrap -flex -justify-end -align -items-end -fixed -bottom-0 -bg-b-base4"
	>
		<v-btn
			v-for="[icon, link] in icons"
			:key="icon"
      :href="link"
      target="_blank"
			class="mx-4 -outline-none"
			dark
			icon
		>
			<v-icon size="24px">
				{{ icon }}
			</v-icon>
		</v-btn>
    <div class="-ml-10 -mr-10">
      <v-btn class="-outline-none">
				<span class="-block -w-100">
        {{ msToTime(this.clockTime) }}
				</span>
      </v-btn>
    </div>
	</v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	data: () => ({
		icons: [
			['mdi-github', 'https://github.com/nwttstar'],
			['mdi-twitter', 'https://github.com/nwttstar'],
			['mdi-linkedin', 'https://github.com/nwttstar'],
			['mdi-alpha-w-circle-outline', 'https://github.com/nwttstar'],
		],
	}),
	computed: {
    ...mapGetters([
      'visitedTime',
      'nowTime',
      'clockTime'
    ]),
  },
  methods: {
    ...mapActions([
      'setTimer'
    ]),
    clock() {
      this.setTimer();
    },
    getClockTime() {
      if( this.clockTime ) return;
      setInterval(this.clock, 1000)
    },
    msToTime(ms) {
      const h = String(Math.floor(ms / 3600000) + 100).substring(1);
      const m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
      const s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
      return h+':'+m+':'+s;
    },
  },
  mounted() {
    this.getClockTime()
  }
}
</script>

<style lang="scss" scoped>

.wrap {
	width: 100%;
	height: 50px;
}

</style>