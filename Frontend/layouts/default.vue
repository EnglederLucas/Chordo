<template>
	<div class="page-container">
		<Sidebar />
		<Nuxt />
	</div>
</template>

<script></script>

<style lang="scss">
html {
	font-family: "Jost", sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;

	background-color: var(--bg);

	height: 100%;
	width: 100%;
}

body {
	height: 100%;
	width: 100%;

	#__nuxt {
		height: 100%;
		width: 100%;

		#__layout {
			height: 100%;
			width: 100%;
		}
	}
}

.page-container {
	height: 100%;
	width: 100%;
	display: flex;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}
</style>
