<template>
	<div
		class="flex items-center justify-center gap-3 text-sm text-terciary-400 dark:text-terciary-500 transition-colors duration-300"
	>
		<button
			v-for="filter in store.filters"
			@click.prevent="store.setFilter(filter)"
			v-text="filter.label"
			class="hover:text-terciary-800 hover:dark:text-terciary-300 transition-colors duration-300 p-1"
			:class="{ '!text-primary-600 dark:!text-primary-500': filter.active }"
		/>
	</div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();
</script>
