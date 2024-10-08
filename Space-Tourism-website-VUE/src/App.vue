<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <main>
    <Header class="absolute" />
    <RouterView />
  </main>
</template>

