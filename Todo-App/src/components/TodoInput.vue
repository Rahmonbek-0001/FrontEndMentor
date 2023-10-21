<template>
  <label
    class="rounded shadow-md flex items-center gap-4 py-4 px-6 bg-white dark:bg-terciary-800"
  >
    <div
      class="group border border-terciary-300 dark:border-terciary-600 cursor-pointer rounded-full"
    >
      <div
        @click.prevent="handleInput()"
        class="p-1.5 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        :class="{ 'opacity-100': inputValue }"
      >
        <IconPlus class="w-3 aspect-square fill-white" />
      </div>
    </div>

    <input
      @keypress.enter="handleInput()"
      type="text"
      placeholder="Create a new todo..."
      v-model="inputValue"
      class="bg-transparent w-full focus:outline-none placeholder:text-terciary-400 placeholder:dark:text-terciary-600 text-terciary-800 dark:text-terciary-200"
    />
  </label>
</template>

<script setup>
import IconPlus from "@/components/icons/IconPlus.vue";
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";

const store = useTodoStore();

const inputValue = ref("");

function handleInput() {
  store.addTodo(inputValue.value);
  inputValue.value = "";
}
</script>
