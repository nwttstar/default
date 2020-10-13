<template>
  <div>
    <p class="-mb-25 -border -border-b-base1">btn from vue</p>
		<button class="btn-BTN">{{ btnLabel }}</button>
  </div>
</template>

<script>
export default {
	props: {
		btnLabel: String
	}
}
</script>

<style lang="scss" scoped>

p {
	font-size: 30px;
}

</style>