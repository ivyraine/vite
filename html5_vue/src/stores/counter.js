import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Pinia Counter',
    }),
    getters: {
        doubleCount: state => state.count * 2 ,
        sayHello: state => `Hello, ${state.name}` ,
    },
    actions: {
        // increment: () => this.count++ ,  // 箭頭函數沒有 this，不能這樣寫
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        },
        incrementByAmount(num){
            this.count += num
        },

        fetchSomeData(){  // 非同步的操作
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.name = 'Data Fetched!'
                    resolve()
                }, 2000)
            })
        },
    },
})


// 原來的程式
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
