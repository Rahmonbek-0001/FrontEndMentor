<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="mt-10 w-full">
    <div
      class="dark:text-white text-black flex justify-around items-center container mx-auto max-[1280px]:flex-col max-[1280px]:justify-start"
    >
      <div class="grid justify-center items-center gap-10">
        <a href="/"
          ><button
            class="dark:bg-dark-card bg-light w-20 dark:text-white text-black gap-1 flex items-center justify-center shadow-md py-1 px-4 rounded-md"
          >
            <i class="fa-solid fa-arrow-left"></i>Back
          </button></a
        >
        <img class="w-[768px] h-[384px]" src="/uzbekistan.svg" alt="" />
      </div>
      <div class="xl:w-[43%] w-full">
        <h3 class="mb-5 font-bold text-xl md:text-start text-center">Uzbekistan</h3>
        <div class="flex md:text-start text-center justify-between flex-wrap">
          <div class="left md:w-1/2 w-full flex flex-col gap-2">
            <p class="font-medium text-base">
              Native Name: <span class="font-normal ml-2">Uzbekistan</span>
            </p>
            <p class="font-medium text-base">
              Population: <span class="font-normal ml-2">34232050</span>
            </p>
            <p class="font-medium text-base">Region: <span class="font-normal ml-2">Asia</span></p>
            <p class="font-medium text-base">
              Sub Region: <span class="font-normal ml-2">Central Asia</span>
            </p>
            <p class="font-medium text-base">
              Capital: <span class="font-normal ml-2">Tashkent</span>
            </p>
          </div>
          <div class="right md:w-1/2 w-full flex flex-col gap-2">
            <p class="font-medium text-base">
              Top Level Domain: <span class="font-normal ml-2">.uz</span>
            </p>
            <p class="font-medium text-base">
              Currencies: <span class="font-normal ml-2">UZS</span>
            </p>
            <p class="font-medium text-base">
              Language: <span class="font-normal">Russian, </span
              ><span class="font-normal">Uzbek, </span>
            </p>
          </div>
        </div>
        <div class="flex mt-3 flex-wrap">
          <h2 class="mr-3 font-medium">Border Countries</h2>
          <a
            href="/Afghanistan"
            class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2"
            >Afghanistan,</a
          ><a
            href="/Kazakhstan"
            class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2"
            >Kazakhstan,</a
          ><a
            href="/Kyrgyzstan"
            class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2"
            >Kyrgyzstan,</a
          ><a
            href="/Tajikistan"
            class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2"
            >Tajikistan,</a
          ><a
            href="/Turkmenistan"
            class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2"
            >Turkmenistan,</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
