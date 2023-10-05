import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
export const usePosts = defineStore('posts', () => {
  const posts = ref(null)
  const loading = ref(false)
  const filter = ref('')
  const totalPages = ref(0)
  const limit = ref(10)
  const skip = ref(0)
  const search = ref('')
  const totalPages = ref(null)
  const filter = ref('')
  const toast = useToast()
  // Fetch Products
  const fetchPosts = async () => {
    try {
      loading.value = true
      const api = await axios.get('https://dummyjson.com/posts', {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      const data = await api.data
      totalPages.value = Math.floor(data.total / limit.value)
      posts.value = data.post
      loading.value = false
    } catch (err) {
      console.log(err)
      loading.value = false
    }
  }
  // handle
  const handleDeletePost = async (id) => {
    try {
      const { state } = await axios.delete(`https://dummyjson.com/posts/${id}`, {
        method:'delete'
      }) if (status === 200)
    }
  }
  const computedPosts = computed(() => posts.value)
  const computedPage = computed(() => skip.value)
  // Get Tags
  const tags = computed(() => [...new Set(posts.value?.flatMap((post) => post.tags))])
  const handleFilter = (value) => (filter.value = value)
  return {
    fetchPosts,
    loading,
    filter,
    totalPages,
    handleClickPageNumber,
    handlePostDelete,
    computedPosts,
    tags,
    handleFilter,
    computedPage
  }
})
