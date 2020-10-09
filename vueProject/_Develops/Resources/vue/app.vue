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
      <li class="-p-2 -border">
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
  </div>
</template>

<script>
import btn from '../vue/parts/btn.vue'

export default {
  components: {
		btn
	},
    data: () => {
        return {
            greeting: 'konn',
            btnLabel: ''
        }
    }
}
</script>

<style lang="scss" scoped>

::v-deep .title-head {
    color: $fontColor_link;
}
::v-deep .btn-BTN {
  color: red;
}

</style>