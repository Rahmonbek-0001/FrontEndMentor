<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="h-[700px] flex items-center">
    <div class="container mx-auto flex items-center justify-between">
      <!-- left -->
      <div class="font-poppins w-[40%]">
        <h1 class="text-6xl">
          More than just <br />
          shorter links
        </h1>
        <p class="text-lg my-3 text-Grayish-Violet">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <Button class="px-5 py-2 rounded-3xl">
          <a href="#">Get startend</a>
        </Button>
      </div>
      <!-- Right -->
      <div class=""><img :src="illustration" alt="illustration" /></div>
    </div>
  </section>
</template>

<script setup>
import Button from '../ui-components/Button.vue'
import { illustration } from '../assets'
</script>
