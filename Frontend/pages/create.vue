<template lang="html">
	<div class="editor-area">
		<div class="header">
			<InputSeamless placeholder="Title" />
			<InputSeamless placeholder="Artist" size="1.5em" color="#89898B" />
		</div>

		<div class="editor">
			<Editor />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="css">
.editor-area {
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	flex: 1;
	padding-bottom: 4%;
}

.header {
	width: 100%;
	flex: 0.2;
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.editor {
	flex: 0.8;
	display: flex;

	width: 80%;
	height: 80%;
}
</style>
