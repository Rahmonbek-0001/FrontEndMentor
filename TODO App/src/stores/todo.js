import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
	state: () => ({
		todos: [
			{ id: 1, text: "Complete online JavaScript course", done: true },
			{ id: 2, text: "Jog around the park 3x", done: false },
			{ id: 3, text: "10 minutes meditation", done: false },
			{ id: 4, text: "Read for 1 hour", done: false },
			{ id: 5, text: "Pick up groceries", done: false },
			{ id: 6, text: "Complete Todo App on Frontend Mentor", done: false },
		],

		filters: [
			{ label: "All", active: true },
			{ label: "Active", active: false },
			{ label: "Completed", active: false },
		],
	}),

	getters: {
		filteredTodos(state) {
			const activeFilter = state.filters.find((todoFilter) => todoFilter.active);

			if (activeFilter.label === "Active") return state.todos.filter((todo) => !todo.done);
			if (activeFilter.label === "Completed") return state.todos.filter((todo) => todo.done);

			return state.todos;
		},

		doneTodosCount(state) {
			return state.todos.filter((todo) => !todo.done).length;
		},
	},

	actions: {
		addTodo(text) {
			if (!text) return;

			const newTodo = { id: Date.now(), text, done: false };
			this.todos.unshift(newTodo);
		},

		toggleTodo(todoId) {
			const todo = this.todos.find((todo) => todo.id === todoId);
			todo.done = !todo.done;
		},

		removeTodo(todoId) {
			this.todos = this.todos.filter((todo) => todo.id !== todoId);
		},

		removeDoneTodos() {
			this.todos = this.todos.filter((todo) => !todo.done);
		},

		setFilter(filter) {
			this.filters.forEach((todoFilter) => {
				todoFilter.active = todoFilter.label === filter.label;
			});
		},
	},
});
