<template>
  <div>
    <p>{{ greeting }}, World!</p>
    <h2 class="-mb-2 -px-2 -text-xl">New Todo</h2>
    <form class="-mb-4 -px-4">
      <input type="text" class="-p-2 -border" />
      <button class="-ml-2 -p-23 -rounded -transition -duration-500 -ease-in-out -text-white -bg-b-base1 hover:-opacity-40">submit</button>
    </form>
    <h2 class="title-head -mb-23 -px-2 -text-xl">List Todo</h2>
    <ul class="-py-2 -px-4">
      <li class="p-8 -border">
        <p class="-border-b">todo 1</p>
        <p class="-text-sm">2020 05/12</p>
      </li>
      <li class="-mt-2 -text-20 -p-2 -border">
        <p class="-border-b">todo 2</p>
        <p class="-text-sm">2020 05/12</p>
      </li>
      <li class="-mt-2 -text-10 -p-2 -border">
        <p class="-border-b">todo 3</p>
        <p class="-text-sm">2020 05/12</p>
      </li>
    </ul>
    <btn
      btnLabel="B.Taaa.N"
    />
    <router-link to="/A" class="mr-3 no-underline">Aarea</router-link> 
    <router-link to="/B" class="mr-3 no-underline">Barea</router-link>    
    
    <router-view></router-view>
    <button @click="back">back</button>
    <hr>
    <h2>store</h2>
    <p>{{ getNumbers }}</p>
    <button @click="calc(getNumbers)">+++</button>
    <v-btn dark>Button</v-btn>
  </div>
</template>

<script>
import btn from '../vue/parts/btn.vue'
import { 
  VBtn, VFooter
} from 'vuetify/lib'

export default {
  components: {
    btn,
    VBtn,
    VFooter
	},
  data() {
    return {
        greeting: 'konn',
        btnLabel: ''
    }
  },
  methods: {
    back() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    calc(num) {
      this.$store.dispatch('calc')
    }
  },
  computed: {
    getNumbers() {
      return this.$store.state.count;
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep .title-head {
  color: blue;
}
::v-deep .btn-BTN {
  color: red;
}

</style>