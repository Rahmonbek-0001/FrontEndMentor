<!-- eslint-disable vue/valid-template-root -->
<template>
  <figure class="advanced_card bg-white p-10 font-poppins relative">
    <div class="bg-Dark-Violet inline-block p-5 rounded-full absolute -top-10">
      <img :src="item.image" class="w-9 h-9" :alt="item.title" />
    </div>
    <figcaption class="text-center mt-10">
      <h2 class="text-xl">{{ item.title }}</h2>
      <p class="mt-5 text-Grayish-Violet">{{ item.body }}</p>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps(['item'])
</script>
