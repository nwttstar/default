<template>
  <main>
    <h2 class="content-title">
      How are <span class="-text-f-base2">y</span>ou?
    </h2>

  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data: () => ({
    items: [
      ['mdi-email', 'Inbox'],
      ['mdi-account-supervisor-circle', 'Supervisors'],
      ['mdi-clock-start', 'Clock-in'],
    ],
  }),
}
</script>

<style lang="scss" scoped>

.mytext {
  color: $accentColor;
}

</style>
