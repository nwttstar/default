<template>
  <div class="wrap -h-screen -bg-white" id="container-default">
    <l-header />
    <div class="-flex">
      <l-nav />
      <v-card
        class="content -fixed -z-20 -bg-b-base3"
        v-ripple
      >
        <nuxt />
      </v-card>
    </div>
    <l-footer />
  </div>
</template>

<script>
import LHeader from './parts/LHeader.vue'
import LNav from './parts/LNav.vue'
import LFooter from './parts/LFooter.vue'

export default {
  components: {
    // layout
    LHeader, LNav ,LFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  top: -2px;
  right: -2px;
  width: 80vw;
  max-width: calc(100vw - 100px);
  height: calc(100vh - 120px);
}
.v-sheet {
  border: none;
}
::v-deep .v-ripple__container {
  opacity: .3;
  color: #ddd;
}

</style>
