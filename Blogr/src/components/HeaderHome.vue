<template>
  <header class="bg-Light-red h-[500px] p-5 overflow-hidden relative rounded-bl-[100px]">
    <img
      src="../images/bg-pattern-intro-desktop.svg"
      alt="header-logo"
      class="absolute z-0 -top-[450px] -right-80"
    />
    <nav class="flex justify-around relative">
      <!-- left -->
      <div class="flex items-center gap-5">
        <img src="../images/logo.svg" alt="" />
        <div class="grid">
          <button
            @click="toggle = !toggle"
            class="text-Grayish-blue gap-2 flex items-center justify-center hover:text-white duration-100"
          >
            Product
            <img src="../images/icon-arrow-dark.svg" alt="arrow" />
            <!--      -->
          </button>
          <div v-if="toggle"></div>
          <div v-else class="bg-white p-5 grid rounded-xl">
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
        </div>
        <div class="grid">
          <button
            @click="toggle2 = !toggle2"
            class="text-Grayish-blue gap-2 flex items-center justify-center hover:text-white duration-100"
          >
            Company
            <img src="../images/icon-arrow-dark.svg" alt="arrow" />
          </button>
          <div v-if="toggle2"></div>
          <div v-else class="bg-white p-5 grid rounded-xl">
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div class="flex flex-col">
          <button
            @click="toggle3 = !toggle3"
            class="text-Grayish-blue gap-2 flex items-center justify-center hover:text-white duration-100"
          >
            Connect
            <img src="../images/icon-arrow-dark.svg" alt="arrow" />
            <!--    -->
            <div v-if="toggle3"></div>
            <div v-else class="bg-white p-5 grid rounded-xl text-black ">
              <a href="#">Contact</a>
              <a href="#">Newsletter</a>
              <a href="#">LinkedIn</a>
            </div>
          </button>
        </div>
      </div>
      <!-- right -->
      <div class="text-Grayish-blue">
        <button class="duration-1000 px-5 py-2">Login</button>
        <button
          class="px-5 bg-white text-Light-red py-2 rounded-3xl hover:text-white hover:bg-opacity-25 duration-1000"
        >
          Sign Up
        </button>
      </div>
    </nav>
    <div class="grid justify-center relative mt-24 text-center">
      <h1 class="text-5xl font-normal text-white">A modern publishing platform</h1>
      <p class="text-Grayish-blue my-10">Grow your audience and build your online brand</p>
      <div class="flex justify-center gap-4">
        <button
          class="bg-white text-Light-red rounded-3xl py-2 px-3 font-semibold hover:bg-opacity-40 hover:text-white duration-1000"
        >
          Start for Free
        </button>
        <button
          class="hover:bg-white hover:text-Light-red duration-1000 border text-white rounded-3xl py-2 px-3 font-semibold"
        >
          Learn More
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
let toggle = ref(true)
let toggle2 = ref(true)
let toggle3 = ref(true)
</script>
