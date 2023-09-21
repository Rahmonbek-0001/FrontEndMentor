<template>
  <section class="products flex flex-col flex-grow py-5">
    <div class="container flex flex-col flex-grow mx-auto">
      <form class="mb-5 flex justify-center">
        <input
          type="text"
          class="border rounded outline-none focus:border-blue-300 py-2 px-5 w-full md:w-[50%]"
          placeholder="Search Products Using Title"
        />
      </form>
      <!-- Products FlexBox -->
      <div class="relative flex flex-col flex-grow">
        <!-- Loading -->
        <div class="flex flex-col justify-between flex-grow gap-2">
          <h1>{{ state.count }}</h1>
          <button @click="state.increment">Click</button>
          <button @click="state.decrement">Click--</button>
          <div class="flex flex-wrap flex-grow gap-6">
            <ProductCard />
          </div>
          <Pagination :totalPages="10" :handleClickPageNumber="() => {}" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Components
import { ProductCard, Pagination } from '../../components'
import { useCount } from '../../stores/products'
const state = useCount()
</script>
