<template>
	<div
		class="flex flex-col rounded shadow-2xl shadow-black/10 text-terciary-600 dark:text-terciary-300 divide-y bg-white divide-terciary-200 dark:bg-terciary-800 dark:divide-terciary-700"
	>
		<div class="flex flex-col max-h-96 overflow-y-auto divide-y divide-terciary-200 dark:divide-terciary-700">
			<TodoListItem v-for="todo in store.filteredTodos" :todo="todo" />
		</div>

		<div class="flex items-center justify-between gap-4 px-5 py-3 text-sm text-terciary-400 dark:text-terciary-500">
			<p v-text="store.doneTodosCount + ' items left'" class="flex flex-grow basis-0" />

			<TodoFilter class="max-sm:hidden" />

			<button
				@click.prevent="store.removeDoneTodos()"
				class="text-right flex justify-end flex-grow basis-0 hover:text-terciary-800 hover:dark:text-terciary-300 transition-colors duration-300"
			>
				Clear Completed
			</button>
		</div>
	</div>
</template>

<script setup>
import TodoFilter from "@/components/TodoFilter.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();
</script>
