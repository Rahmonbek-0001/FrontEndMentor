<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
const themeMode = ref('light')
const toggleTheme = () =>
  themeMode.value == 'light' ? (themeMode.value = 'dark') : (themeMode.value = 'light')
watch(
  () => themeMode.value,
  (newValue, oldValue) => {
    const root = window.document.documentElement
    root.classList.remove(oldValue)
    root.classList.add(newValue)
    localStorage.setItem('theme', newValue)
  }
)
onMounted(() => (themeMode.value = localStorage.getItem('theme') || 'light'))
</script>
<template>
  <header
    class="h-[60px] dark:bg-dark-card dark:border-dark dark:text-white shadow-md flex items-center"
  >
    <div class="container mx-auto flex justify-between max-[350px]:flex-col items-center px-16">
      <h1 class="md:text-2xl text-sm text-right">
        <RouterLink to="/"> Where in the world? </RouterLink>
      </h1>
      <button @click="toggleTheme" class="text-sm md:text-lg flex items-center gap-1">
        <i :class="themeMode == 'light' ? 'fa-solid fa-moon' : 'fa-regular fa-sun'" class="pi"></i>
        <span> {{ themeMode == 'light' ? 'Dark' : 'Light' }} Mode</span>
      </button>
    </div>
  </header>
</template>
