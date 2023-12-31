import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
const useProducts = defineStore('products', () => {
  const products = ref(null)
  const loading = ref(false)
  const limit = ref(12)
  const skip = ref(0)
  const search = ref('')
  const totalPage = ref(null)
  const fetchProducts = async () => {
    try {
      loading.value = true
      const api = await axios.get('https://dummyjson.com/products', {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      const data = await api.data
      totalPage.value = Math.floor(data.total / limit.value)
      products.value = data.products
      loading.value = false
    } catch (err) {
      console.log(err)
      loading.value = false
    }
  }
  const handleDeleteProduct = async (id) => {
    try {
      const { status } = await axios.delete(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        products.value = products.value?.filter((product) => product.id !== id)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const filterProducts = computed(() =>
    products?.value?.filter((product) =>
      product.title.toLowerCase().includes(search.value.trim().toLowerCase())
    )
  )
  const handlePaginationNumber = (value) => {
    skip.value = value * limit.value - limit.value
    fetchProducts()
  }
  return {
    products,
    loading,
    fetchProducts,
    search,
    filterProducts,
    totalPage,
    handlePaginationNumber,
    handleDeleteProduct
  }
})
export default useProducts
