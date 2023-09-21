// storage
import { defineStore } from 'pinia'
// Options API
export const useCount = defineStore('count', {
  state: () => {
    return {
      count: 10,
      product: []
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement(){
        this.count > 0 && this.count--
    }
  }
})

// Composition API
import { computed, ref } from 'vue'
export const useCount1 = defineStore('count1', () => {
  // state
  const count1 = ref(0)
  //   getters
  const double = computed(() => count1.value * 2)
  //   actions
  const increment = () => {
    count1.value++
  }
  return { count1, double, increment }
})
