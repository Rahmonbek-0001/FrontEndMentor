<template>
	<div class="relative min-h-screen py-16 sm:py-28 bg-terciary-100 dark:bg-terciary-950">
		<img
			:src="darkTheme ? 'imgs/bg-desktop-dark.jpg' : 'imgs/bg-desktop-light.jpg'"
			alt="todo app background"
			class="absolute top-0 inset-x-0 w-full h-72 sm:h-96 object-cover max-sm:dark:object-left" 
		/>

		<Container class="relative flex flex-col gap-10">
			<div class="flex items-center justify-between gap-4">
				<h2 class="text-5xl font-bold tracking-[0.42em] text-white mt-3.5">TODO</h2>

				<button @click.prevent="toggleDarkMode()" class="p-2">
					<component :is="darkTheme ? IconSun : IconMoon" class="w-5 fill-white" />
				</button>
			</div>

			<div class="flex flex-col gap-6">
				<TodoInput />
				<TodoList />

				<div
					class="p-4 bg-white dark:bg-terciary-800 text-terciary-400 rounded shadow-2xl shadow-black/10 sm:hidden"
				>
					<TodoFilter />
				</div>
			</div>

			<!-- <p class="text-center text-sm text-terciary-400 dark:text-terciary-600 mt-8">
				Drag and drop to reorder list
			</p> -->
		</Container>
	</div>
</template>

<script setup>
import Container from "@/components/Container.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import IconSun from "@/components/icons/IconSun.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import { onMounted, ref } from "vue";

const darkTheme = ref(JSON.parse(localStorage.getItem("darkTheme") || false));

function toggleDarkMode() {
	darkTheme.value = !darkTheme.value;
	persistDarkTheme();
}

function persistDarkTheme() {
	localStorage.setItem("darkTheme", darkTheme.value);
	document.documentElement.classList.toggle("dark", darkTheme.value);
}

onMounted(() => persistDarkTheme());
</script>

<style>
::-webkit-scrollbar {
	width: 6px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #cbd5e1;
}

html.dark ::-webkit-scrollbar-thumb {
	background-color: #475569;
}
</style>
