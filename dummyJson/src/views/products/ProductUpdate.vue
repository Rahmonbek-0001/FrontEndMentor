<template>
  <!-- Product Update -->
  <section class="">
    <div class="container mx-auto font-roboto">
      <h2 class="text-center text-xl uppercase pt-10 pb-5">Update Product</h2>
      <form @submit.prevent="handleSubmit" class="w-1/2 mx-auto flex flex-col gap-3">
        <input
          v-model="product.title"
          type="text"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Title"
        />
        <input
          v-model="product.category"
          type="text"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Category"
        />
        <input
          v-model="product.brand"
          type="text"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Brand"
        />
        <input
          v-model="product.price"
          type="number"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Price"
        />
        <textarea
          v-model="product.description"
          class="w-full border outline-none resize-none p-2 h-40 rounded"
          placeholder="Description"
        ></textarea>
        <button
          type="submit"
          class="bg-green-500 self-end px-5 py-2 text-white rounded hover:bg-green-600 transition-all duration-300"
        >
          Update
        </button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
const product = reactive({
  title: '',
  category: '',
  description: '',
  brand: '',
  price: ''
})
const handleSubmit = async () => {
  try {
    //
  } catch (err) {
    console.log(err)
  }
}
</script>
