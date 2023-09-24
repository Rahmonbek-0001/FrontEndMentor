<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Skills -->
  <h1 id="contact"></h1>
  <div class="flex flex-wrap gap-4 my-2 mx-2 imgs">
    <div class="html1 grid items-center">
      <img
        class="w-32 p-5 border border-x-4 border-red-500 rounded-full"
        src="../../icons/html.svg"
        alt="html_icon"
      />
    </div>
    <div class="css1 grid items-center">
      <img
        class="w-32 p-5 border border-x-4 border-cyan-500 rounded-full"
        src="../../icons/css.svg"
        alt="css_icon"
      />
    </div>
    <div class="js1 grid items-center">
      <img
        class="w-32 p-5 border border-x-4 border-yellow-500 rounded-full"
        src="../../icons/javascript.svg"
        alt="javascript_icon"
      />
    </div>
  </div>
</template>

<script>
export const contact = [{ href: '#skills' }]
</script>

<style scoped>
.html1:hover::before {
  content: 'HTML';
  width: 130px;
  padding: 5px;
  background: rgb(255, 38, 0);
  position: absolute;
  color: white;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  border-radius: 100%;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  --tw-shadow-color: rgb(255, 38, 0);
  --tw-shadow: var(--tw-shadow-colored);
}
.css1:hover::before {
  content: 'CSS';
  width: 130px;
  padding: 5px;
  background: rgb(0, 174, 255);
  position: absolute;
  color: white;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  border-radius: 100%;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  --tw-shadow-color: rgb(0, 174, 255);
  --tw-shadow: var(--tw-shadow-colored);
}
.js1:hover::before {
  content: 'Javascript';
  width: 130px;
  padding: 5px;
  background: rgb(255, 215, 0);
  position: absolute;
  color: white;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  border-radius: 100%;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  --tw-shadow-color: rgb(255, 215, 0);
  --tw-shadow: var(--tw-shadow-colored);
}
</style>
