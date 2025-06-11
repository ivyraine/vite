<template>
    <h3>Receiver</h3>
    <p>收到的資訊: {{ received }}</p>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import eventBus from './bus.js'

const received = ref('還沒收到')

const handleMessage = msg => received.value = msg

onMounted(() => {
    // 聆聽 send-message 事件
    // eventBus.on('send-message', (msg) => {
    //     received.value = msg
    // })

    eventBus.on('send-message', handleMessage)
})

// 沒有一定要寫，只是練習 off()
onBeforeUnmount(() => {
    // 停止 send-message 事件
    eventBus.off('send-message', handleMessage)
})

</script>