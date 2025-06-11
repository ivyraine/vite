<script setup>
import Sender from './Sender.vue'   // 發送事件與資料的組件
import Receiver from './Receiver.vue'   // 接收資料的組件

// bus.emit('abc')    發出自訂事件
// bus.on('abc', () => {})     聆聽該事件
</script>

<template>
    <Sender />
    <Receiver />
</template>