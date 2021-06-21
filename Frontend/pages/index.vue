<template>
	<div class="container"><h1>Chordo</h1></div>
</template>

<script lang="ts">
import Vue from "vue";

// import OhVueIcon from "oh-vue-icons/dist/v3/icon.es"

// import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons"
// OhVueIcon.add(FaFlag, RiZhihuFill)

// Vue.component("VIcon", OhVueIcon)
// import Heroicons from "@bytegem/vue-heroicons"
// Vue.use(Heroicons)

export default Vue.extend({});
</script>

<style lang="scss">
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	h1 {
		font-size: 5em;
		font-weight: bold;
		font-family: "Jost";
		color: var(--light);
	}

	h1::after {
		content: "";
		background: radial-gradient(
			rgba(var(--primary-rgb), 20%),
			transparent 75%
		);
		width: 50%;
		height: 50%;
		position: absolute;
		z-index: -1;

		border-radius: 50%;
		filter: blur(30px);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
