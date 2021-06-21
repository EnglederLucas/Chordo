<template lang="html">
	<form>
		<input
			ref="input"
			data-gramm_editor="false"
			data-gramm="false"
			contenteditable
			:style="getStyles()"
			type="text"
			:value="value"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
		/>
	</form>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "InputSeamless",
	props: {
		value: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "3em",
		},
		fontWeight: {
			type: String,
			default: "bold",
		},
		textAlign: {
			type: String,
			default: "center",
		},
		autofocus: {
			type: Boolean,
			default: true,
		},
		color: String,
	},
	mounted() {
		if (this.autofocus) {
			this.focusInput();
		}
	},
	methods: {
		focusInput() {
			(this.$refs.input as any).focus();
		},
		getStyles(): Partial<CSSStyleDeclaration> {
			let cssStyles: Partial<CSSStyleDeclaration> = {
				fontSize: this.size,
				fontWeight: this.fontWeight,
				textAlign: this.textAlign,
			};

			if (this.color) {
				cssStyles = { ...cssStyles, color: this.color };
			}

			return cssStyles;
		},
	},
});
</script>

<style lang="scss" scoped>
input {
	background: transparent;
	border: none;
	outline: none;

	color: var(--light);
	font-family: "Jost", sans-serif;
}

[contenteditable]::selection {
	background: rgba(var(--primary-rgb), 50%); /* Safari */
}
[contenteditable]::-moz-selection {
	background: rgba(var(--primary-rgb), 50%); /* Firefox */
}
</style>
