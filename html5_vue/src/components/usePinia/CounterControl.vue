<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.js'

const counter = useCounterStore()
const amount = ref(0)

const incrementByInput = () => {
    counter.incrementByAmount(amount.value)
}
</script>

<template>
    <h2>Counter Control</h2>
    <input type="number" v-model="amount">
    <button @click="incrementByInput">Increment by input</button>
</template>