<template lang="html">
	<div class="editor-text-area">
		<div class="textarea" contenteditable="true"></div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.editor-text-area {
	width: 100%;
	height: 100%;
	background-color: rgba(var(--light-rgb), 5%);
	border-radius: 50px;
}

.textarea {
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	width: 100%;
	height: 100%;

	background-color: transparent;
	resize: none;

	outline: none;
	border: none;

	color: var(--light);
	font-family: "Inconsolata", sans-serif;
	font-size: 2em;

	padding: 2em;
}
</style>
