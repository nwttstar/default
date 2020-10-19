<template>
  <div>
    とっぷぺーじ！
    <logo />
    <vuetify-logo />
    <div class="mytext -my-10">まいてきすと</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style lang="scss" scoped>

.mytext {
  color: $accentColor;
}

</style>
