<template lang="html">
	<div class="round-button">
		<slot></slot>
	</div>
</template>
<script>
export default Vue.extend({
	name: "IconButton",
	props: {
		size: {
			type: String,
			default: "3em",
		},
		color: {
			type: String,
			default: "#2B2B2E",
		},
	},
});
</script>
<style lang="scss"></style>
