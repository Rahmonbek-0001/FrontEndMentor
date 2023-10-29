<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="">
    <!-- Section 1 -->
    <section
      class="flex flex-col flex-wrap justify-center items-center overflow-x-hidden overflow-y-hidden mt-28 container mx-auto"
    >
      <h2 class="text-3xl font-semibold text-Very-dark-blue">Designed for the future</h2>
      <div class="flex justify-around items-center relative z-10">
        <div class="">
          <h3 class="text-3xl text-Very-dark-blue font-semibold">
            Introducing an extensible editor
          </h3>
          <p class="text-Very-dark-grayish-blue mt-8 mb-20">
            Blogr features an exceedingly intuitive interface which lets you focus <br />
            on one thing: creating content. The editor supports management of
            <br />
            multiple blogs and allows easy manipulation of embeds such as images, <br />
            videos, and Markdown. Extensibility with plugins and themes provide <br />
            easy ways to add functionality or change the looks of a blog.
          </p>
          <h3 class="text-3xl text-Very-dark-blue mt-10 mb-6 font-semibold">
            Robust content management
          </h3>
          <p class="text-Very-dark-grayish-blue">
            Flexible content management enables users to easily move through
            <br />
            posts. Increase the usability of your blog by adding customized
            <br />
            categories, sections, format, or flow. With this functionality, you’re in <br />
            full control.
          </p>
        </div>
        <div class="w-1/2">
          <img src="../images/illustration-editor-desktop.svg" alt="" />
        </div>
      </div>
    </section>
    <!-- Section 2 -->
    <section
      class="rounded-tr-[100px] rounded-bl-[100px] section-two bg-Very-dark-black-blue h-[400px] flex justify-evenly items-center overflow-hidden relative z-10"
    >
      <!-- left -->
      <div class="">
        <img
          src="../images/bg-pattern-circles.svg"
          class="absolute -top-[450px] -left-56 z-0"
          alt="bg-pattern-circles"
        />
        <img
          src="../images/illustration-phones.svg"
          class="relative z-20 top-20"
          alt="illustration-phones "
        />
      </div>
      <!-- right -->
      <div class="relative">
        <h2 class="text-white text-2xl font-semibold my-5">State of the Art Infrastructure</h2>
        <p class="text-Grayish-blue">
          With reliability and speed in mind, worldwide data centers provide the <br />
          backbone for ultra-fast connectivity. This ensures your site will load <br />
          instantly, no matter where your readers are, keeping your site
          <br />
          competitive.
        </p>
      </div>
    </section>
    <!-- Section 3 -->
    <section class="flex items-center justify-evenly overflow-x-hidden -mt-20 w-full flex-wrap">
      <!-- left -->
      <div class="-ml-[360px] mt-40">
        <img class="" src="../images/illustration-laptop-desktop.svg" alt="" />
      </div>
      <!-- right -->
      <div class="relative">
        <h3 class="text-2xl text-Very-dark-blue font-semibold my-8">Free, open, simple</h3>
        <p class="text-Very-dark-grayish-blue font-medium">
          Blogr is a free and open source application backed by a large <br />
          community of helpful developers. It supports features such as code
          <br />
          syntax highlighting, RSS feeds, social media integration, third-party <br />
          commenting tools, and works seamlessly with Google Analytics. The
          <br />
          architecture is clean and is relatively easy to learn.
        </p>
        <h3 class="text-2xl text-Very-dark-blue font-semibold my-8 mt-20">Powerful tooling</h3>
        <p class="text-Very-dark-grayish-blue font-medium">
          Batteries included. We built a simple and straightforward CLI tool that <br />
          makes customization and deployment a breeze, but capable of <br />
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  </main>
</template>
