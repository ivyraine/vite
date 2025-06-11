// import { ref } from 'vue'
import { defineStore } from 'pinia'

// 1 定義 Store 的名稱(自行命名) ex. User Info Store
// 2 定義 Store 的屬性和方法 ex. state、getters、actions
// 語法: export default defineStore('User Info Store', {})

export default defineStore('User Info Store', {
    // 類似 data: () => {}
    // state: () => ({}), // 最右邊加上 ()，是要標示回傳(return)一個物件
    state: () => ({
        name: 'Peter',
        age: 40
    }),

    // 類似 computed，會有 return
    getters: {
        getUserName(state){
            return state.name
        },
        getUserAge(state){
            return state.age
        },
    },

    // 類似 methods，用來修改 state 的邏輯
    // 同步、非同步(AJAX)都放這裡
    actions: {
        updateUserName(){
            this.name = `野原新之助`
        },
    },
})