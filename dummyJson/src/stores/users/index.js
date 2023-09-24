import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
const useUser = defineStore('products', () => {
  const user = ref(null)
  const loading = ref(false)
  const limit = ref(12)
  const skip = ref(0)
  const search = ref('')
  const totalPage = ref(null)
  const fetchProducts = async () => {
    try {
      loading.value = true
      const api = await axios.get('https://dummyjson.com/users', {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      const data = await api.data
      totalPage.value = Math.floor(data.total / limit.value)
      user.value = data.users
      loading.value = false
    } catch (err) {
      console.log(err)
      loading.value = false
    }
  }
  const handleDeleteProduct = async (id) => {
    try {
      const { status } = await axios.delete(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        user.value = user.value?.filter((product) => product.id !== id)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const filterProducts = computed(() =>
    user?.value?.filter((user) =>
      user.title.toLowerCase().includes(search.value.trim().toLowerCase())
    )
  )
  const handlePaginationNumber = (value) => {
    skip.value = value * limit.value - limit.value
    fetchProducts()
  }
  return {
    user,
    loading,
    fetchProducts,
    search,
    filterProducts,
    totalPage,
    handlePaginationNumber,
    handleDeleteProduct
  }
})
export default useUser
