<template>
  <div>
    <p>{{ greeting }}, World!</p>
    <h2 class="mb-2 px-2 text-xl">New Todo</h2>
    <form class="mb-4 px-4">
      <input type="text" class="p-2 border" />
      <button class="ml-2 p-2 rounded text-white bg-blue-500">submit</button>
    </form>
    <h2 class="mb-2 px-2 text-xl">List Todo</h2>
    <ul class="py-2 px-4">
      <li class="p-2 border">
        <p class="border-b">todo 1</p>
        <p class="text-sm">2020 05/12</p>
      </li>
      <li class="mt-2 p-2 border">
        <p class="border-b">todo 2</p>
        <p class="text-sm">2020 05/12</p>
      </li>
      <li class="mt-2 p-2 border">
        <p class="border-b">todo 3</p>
        <p class="text-sm">2020 05/12</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            greeting: 'konn'
        }
    }
}
</script>