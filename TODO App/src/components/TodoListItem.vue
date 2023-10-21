<template>
  <button
    @click.prevent="store.toggleTodo(todo.id)"
    class="group px-6 py-4 flex items-center justify-between gap-4 text-left"
  >
    <div class="flex items-center gap-4">
      <div
        class="p-px rounded-full group-hover:bg-gradient-to-br from-primary-400 to-secondary-400"
        :class="
          todo.done
            ? 'bg-gradient-to-br'
            : 'bg-terciary-300 dark:bg-terciary-600'
        "
      >
        <div
          class="p-1.5 rounded-full text-white"
          :class="{
            'bg-white dark:bg-terciary-800 dark:text-terciary-800': !todo.done,
          }"
        >
          <IconCheck class="w-3 aspect-square fill-current" />
        </div>
      </div>

      <span
        v-text="todo.text"
        :class="{
          'line-through text-terciary-400 dark:text-terciary-600': todo.done,
        }"
      />
    </div>

    <button
      @click.stop.prevent="store.removeTodo(todo.id)"
      class="p-1 opacity-0 max-lg:opacity-100 group-hover:opacity-100 lg:hover:text-red-500 transition-all duration-300 text-terciary-300 dark:text-terciary-600 lg:hover:dark:text-red-500"
    >
      <IconXMark class="w-5 aspect-square fill-current" />
    </button>
  </button>
</template>

<script setup>
import IconXMark from "@/components/icons/IconXMark.vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();

const props = defineProps({
  todo: Object,
});
</script>
