<template>
    <h3>Sender</h3>
    <input v-model="message">
    <button @click="sendMessage"> Submit </button>
</template>

<script setup>
import { ref } from 'vue'
import eventBus from './bus.js'

const message = ref('')

const sendMessage = () => {
    // 發送 send-message 事件與資料
    eventBus.emit('send-message', message.value)
}
</script>