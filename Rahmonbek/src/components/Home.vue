<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    class="sticky top-0 z-10 container mx-auto flex flex-wrap justify-between gap-3 bg-gray-800 p-4 text-gray-300"
  >
    <h2
      class="text-2xl font-semibold hover:text-3xl hover:text-cyan-500 border-cyan-400 transition-all duration-500"
    >
      <a href="#">Rahmonbek</a>
    </h2>
    <ul class="flex flex-wrap gap-2 text-gray-300">
      <li
        class="font-medium hover:text-xl hover:text-cyan-500 hover:border-b-[3px] border-cyan-400 transition-all duration-500 rounded-lg"
      >
        <a href="#">Home</a>
      </li>
      <li
        class="font-medium hover:text-xl hover:text-cyan-500 hover:border-b-[3px] border-cyan-400 transition-all duration-500 rounded-lg"
      >
        <a href="#">Abount Me</a>
      </li>
      <li
        class="font-medium hover:text-xl hover:text-cyan-500 hover:border-b-[3px] border-cyan-400 transition-all duration-500 rounded-lg"
      >
        <a href="#">Skills</a>
      </li>
      <li
        class="font-medium hover:text-xl hover:text-cyan-500 hover:border-b-[3px] border-cyan-400 transition-all duration-500 rounded-lg"
      >
        <a href="#">My Work</a>
      </li>
      <li
        class="font-medium hover:text-xl hover:text-cyan-500 hover:border-b-[3px] border-cyan-400 transition-all duration-500 rounded-lg"
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  <div
    class="relative -top-[40px] container flex justify-between w-[calc(100vw-10px)] items-center h-[100vh] for-color__header activeHeader"
  >
    <img src="../../imgs/fs.png" class="w-[100%] h-[100%]" alt="" />
    <div class="z-1 absolute">
      <div class="font-bold text-4xl">
        <h2 class="text-white hover:text-cyan-500 duration-1000">Assalomu Aleykum I'm</h2>
        <div class="font-semibold text-6xl py-4 flex flex-wrap">
          <div class="inline-block text-white hover:text-cyan-500 duration-1000 text-wrap pr-4">
            Rahmonbek
          </div>
          <div class="inline-block text-cyan-500 hover:text-white duration-1000 mb-5">Madminov</div>
        </div>
        <div class="animated-text font-bold">
          <h3 class="text-gray-600 hover:text-cyan-500 duration-500">Web Developer</h3>
          <h3 class="animated-text__color text-white hover:text-cyan-500 duration-500">
            Programmer
          </h3>
          <h3 class="text-cyan-500 hover:text-gray-600 duration-500">Strong Junior</h3>
        </div>
        <a href="#contact">
          <button
            class="py-2 px-4 hover:bg-slate-800 duration-500 text-sm h-10 bg-cyan-700 mt-5 text-white"
          >
            Sea More
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import contact from './Skills.vue'
</script>
<style scoped>
.animated-text {
  box-sizing: border-box;
  display: block;
  height: 40px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 721.275px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration-color: rgb(255, 255, 255);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  color: rgb(255, 255, 255);
  scroll-behavior: smooth;
}
.section-main .content .animated-text h3 {
  font-size: 35px;
  margin: 10px 0;
  color: coral;
}
.animated-text h3:nth-child(1) {
  animation: animated-text 6s infinite ease-in-out;
}
* {
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-decoration: none;
}

user agent stylesheet h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.content {
  width: calc(50% - 1rem);
  color: white;
}
.content {
  margin: 100px 0px 0px 0px;
  color: #000016;
}
.section-main {
  background: url(../imgs/fronted.png) fixed no-repeat center/ cover;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #ddd;
}
*::-webkit-scrollbar {
  -moz-appearance: none !important;
  -ms-overflow-style: none;
  display: none;
}
@keyframes animated-text {
  0% {
    margin-top: 0;
  }
  25% {
    margin-top: -55px;
  }
  50% {
    margin-top: -90px;
  }
  75% {
    margin-top: -55px;
  }
  100% {
    margin-top: 0;
  }
}
</style>
