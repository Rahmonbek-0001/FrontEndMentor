<template>
  <header class="grid justify-center w-[100vw] mt-20">
    <nav class="flex gap-5 justify-between items-center w-[90vw]">
        <router-link to="/">
          <img src="/shared/logo.svg" alt="">
        </router-link>
        <hr class="w-96">
        <div class="flex gap-5">
          <router-link to="/">00 HOME</router-link>
          <router-link to="/destination" class="uppercase">01 destination</router-link>
          <router-link to="/crew" class="uppercase">02 crew</router-link>
          <router-link to="/technology" class="uppercase">03 technology</router-link>
        </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
