<template>
  <!--Products Card -->
  <figure class="product__card border self-start rounded-md relative font-roboto">
    <h5 class="absolute bg-blue-500 right-0 text-xs p-2 rounded-bl text-white capitalize">
      {{ product.category }}
    </h5>
    <img
      class="w-full h-52 object-cover rounded-t"
      :src="product.thumbanail"
      :alt="product.description"
    />
    <figcaption class="h-[150px] p-2 flex flex-col">
      <h3 class="2xl:text-xl text-xl font-medium">{{ product.title }}</h3>
      <p class="flex-grow overflow-hidden md:text-base text-xs text-ellipsis leading-relaxed">
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between">
        <h5>
          Price: <strong>{{ product.price }}$</strong>
        </h5>
        <div class="flex gap-2">
          <router-link
            class="bg-green-500 p-2 px-3 text-xs text-white rounded hover:bg-green-600 transition-all duration-300"
            :to="'/product/' + product.id"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </router-link>
          <button
            type="button"
            class="bg-red-500 p-2 px-3 text-xs text-white rounded hover:bg-red-600 transition-all duration-300"
            @click="state.handleDeleteProduct(product.id)"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </figcaption>
  </figure>
</template>
<script setup>
import { defineProps, handleError } from 'vue'
import useProducts from '../stores/products'
import handleDeleteProduct from '../stores/products'
defineProps(['product'])
const state = useProducts()
</script>
