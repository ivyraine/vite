<template>
    <h2>Lorem ipsum dolor sit amet.</h2>

    <p>Hello, {{ name }}, your age is {{ age }}.</p>
    <p>Hi, {{ getUserName }}! Are you worried about turning {{ getUserAge + 1 }}</p>

    <button @click="updateUserName"> Update(from Pinia) </button>
    <button @click="updateData"> Update(from self) </button>
    <button @click="reset"> Reset </button>

</template>

<script setup>
// 載入user.js
import userStore from '@/stores/user.js' // userStore 是自訂名稱
import { storeToRefs } from 'pinia'

const user = userStore()  // reactive 格式

// 從 state、getters 取得資料
// 讓每個值從 user object 轉換成 ref() 並取出來使用 
const { name, age, getUserName, getUserAge } = storeToRefs(user)

// 1 修改資料(用 ref() 的方式)
name.value = 'Peter Atley'

// 2 修改資料(用 actions 的方式)
// user.updateUserName()  // 直接存取

// 先從 user 解構出來再使用
const { updateUserName } = user
// updateUserName()

// 自行定義功能，不一定要從 Pinia 取用
// 使用 $patch() | $reset()

// 3 修改資料(自訂)
const updateData = () => {
    user.$patch({
        name: 'Sally',
        age: 25
    })
}

const reset = () => user.$reset()
</script>