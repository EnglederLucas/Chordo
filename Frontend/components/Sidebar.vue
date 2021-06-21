<template>
	<div class="sidebar-container">
		<div class="icon-container">
			<div
				:class="`icon ${getSelectedClass('/')}`"
				@click="clickMenuItem('/')"
			>
				<HomeIcon :size="iconSize" />
			</div>
			<div
				:class="`icon ${getSelectedClass('overview')}`"
				@click="clickMenuItem('overview')"
			>
				<BookOpenIcon :size="iconSize" />
			</div>
			<div
				:class="`icon ${getSelectedClass('create')}`"
				@click="clickMenuItem('create')"
			>
				<PlusIcon :size="iconSize" />
			</div>
		</div>
	</div>
</template>

<script>
import { BookOpenIcon, HomeIcon, PlusIcon } from "@vue-hero-icons/outline";

export default {
	components: { BookOpenIcon, HomeIcon, PlusIcon },
	data() {
		return {
			iconSize: "65",
			selected: "plus",
			counter: 0,
		};
	},
	methods: {
		getSelectedClass(val) {
			return val === this.selected ? "icon-selected" : "";
		},

		clickMenuItem(val) {
			this.selected = val;
			this.$router.push({
				path: val,
			});
		},
	},
};
</script>

<style lang="scss">
.sidebar-container {
	display: flex;
	height: 100%;
	left: 0;
	top: 0;
	justify-content: center;
	flex-direction: column;
	width: 20%;
}

.icon-container {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 50%;
}

$slide: 15%;
$grow-duration: 0.4s;

.icon {
	color: rgba(var(--light-rgb), 25%);

	transform: translateX(0);
	transition: transform 0.2s ease;

	&:hover {
		transform: translateX($slide);
		transition: transform 0.2s ease;
	}
}

.icon-selected {
	animation: brighten $grow-duration ease;
	animation-fill-mode: forwards;
	position: relative;

	// 	transform: translateX($slide);
	// transition: transform 0.2s ease;

	&:hover {
		transform: translateX(0);
		transition: transform $grow-duration ease-in-out;
	}

	& > * {
		filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
	}
}

.icon-selected::after {
	content: "";
	background: radial-gradient(rgba(var(--primary-rgb), 70%), transparent 75%);
	width: 200%;
	height: 200%;
	position: absolute;
	z-index: -1;

	border-radius: 50%;
	filter: blur(30px);
	left: 50%;
	margin-left: -100%;
	top: 50%;
	margin-top: -110%;

	animation: grow ease $grow-duration;
}

@keyframes grow {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes brighten {
	0% {
		color: rgba(var(--light-rgb), 25%);
	}
	100% {
		color: rgba(var(--light-rgb), 100%);
	}
}
</style>
