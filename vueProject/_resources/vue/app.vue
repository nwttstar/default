<template>
  <div class="wrap -w-screen -h-screen">
    <l-header/>
    <main class="content-box -fixed -inset-0 -mx-auto -my-14">
        <router-view></router-view>
    </main>
    <v-btn>v-botan</v-btn>
    <l-footer/>
  </div>
</template>

<script>
/* Layout */
import LHeader from './layout/LHeader.vue'
import LFooter from './layout/LFooter.vue'
/* Vuetify */
import { 
  VBtn, VFooter
} from 'vuetify/lib'
/* mapHelper */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    /* Layout */
    LHeader,LFooter,
    /* Vuetify */
    VBtn,
	},
  data() {
    return {
        
    }
  },
  methods: {
    ...mapActions([
      'calc'
    ]),
    back() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
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

.content-box {
  width: 800px;
  height: 500px;
  background-color: blue;
}

</style>