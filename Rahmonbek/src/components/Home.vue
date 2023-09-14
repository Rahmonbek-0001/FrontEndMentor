<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    class="sticky top-0 container mx-auto flex flex-wrap justify-between gap-2 bg-gray-800 p-4 text-gray-300"
  >
    <h2
      class="text-2xl font-semibold hover:text-3xl hover:text-cyan-500 transition-all duration-200"
    >
      <a href="#">Rahmonbek</a>
    </h2>
    <ul class="flex flex-wrap gap-2 text-gray-300">
      <li class="font-medium hover:text-xl hover:text-cyan-500 transition-all duration-300">
        <a href="#">Home</a>
      </li>
      <li class="font-medium hover:text-xl hover:text-cyan-500 transition-all duration-200">
        <a href="#">Skills</a>
      </li>
      <li class="font-medium hover:text-xl hover:text-cyan-500 transition-all duration-200">
        <a href="#">My-Certificates</a>
      </li>
      <li class="font-medium hover:text-xl hover:text-cyan-500 transition-all duration-200">
        <a href="#">Work</a>
      </li>
      <li class="font-medium hover:text-xl hover:text-cyan-500 transition-all duration-200">
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
  <div class="flex flex-wrap gap-4 my-2 mx-2 imgs">
    <div class="html1 grid items-center gap-3">
      <div class="html icon rounded-[100%] shadow-red-700 shadow-xl">HTML</div>
      <img
        class="w-32 p-5 border border-x-4 border-red-500 rounded-full"
        src="../../icons/html.svg"
        alt="html_icon"
      />
    </div>
    <div class="css1 grid items-center gap-3">
      <div class="css icon rounded-[100%] shadow-cyan-700 shadow-xl">CSS</div>
      <img
        class="w-32 p-5 border border-x-4 border-cyan-500 rounded-full"
        src="../../icons/css.svg"
        alt="css_icon"
      />
    </div>
    <div class="js1 grid items-center gap-3">
      <div class="js icon rounded-[100%] shadow-yellow-700 shadow-xl">Javascript</div>
      <img
        class="w-32 p-5 border border-x-4 border-yellow-500 rounded-full"
        src="../../icons/javascript.svg"
        alt="javascript_icon"
      />
    </div>
  </div>
</template>
<style scoped>
.icon {
  width: 130px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  color: white;
  font-family: none;
  display: none;
}
@media screen and (min-width: 0px) {
  .html1:hover {
    .html {
      display: inline;
      position: absolute;
    }
  }
  .css1:hover {
    .css {
      display: inline;
      position: absolute;
    }
  }
  .js1:hover {
    .js {
      display: inline;
      position: absolute;
    }
  }
}

.html {
  background: rgb(255, 38, 0);
}
.css {
  background: rgb(0, 174, 255);
}

.js {
  background: gold;
}
</style>
