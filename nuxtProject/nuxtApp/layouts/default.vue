<template>
  <div class="wrap -h-screen -bg-white" id="container-default">
    <l-header />
    <div class="-flex">
      <l-nav />
      <v-card
        class="content -fixed -p-30 sp:-p-15 -z-20 -bg-b-base3"
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
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

.content {
  top: -2px;
  right: -2px;
  width: 80vw;
  max-width: calc(100vw - 100px);
  height: calc(100vh - 80px);
}
.v-sheet {
  border: none;
}
::v-deep .v-ripple__container {
  opacity: 1;
  color: #fff;
}
::v-deep .content-title {
  position: relative;
  padding: 12px 26px;
  font-family: 'Secular One', sans-serif;
  font-size: 32px;
  color: $baseColor;
  text-shadow: 1px 1px 1px #e3e3e3;
  background-color: white;
  border-top: solid 6px $baseColor;
  border-bottom: solid 6px $baseColor;
  box-shadow: 1px 3px 2px #eee;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 0;
    width: 50%;
    height: 6px;
    background-color: $accentColor;
  }

}

</style>
