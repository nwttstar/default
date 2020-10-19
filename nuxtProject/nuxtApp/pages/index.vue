<template>
  <div>
    とっぷぺーじ！
    <logo />
    <div class="mytext -my-10">まいてきすと</div>
    <nuxt-link to="/noji">
      なくすとりんく
    </nuxt-link>
    <p>
      pたぐ
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>

.mytext {
  color: $accentColor;
}

</style>
