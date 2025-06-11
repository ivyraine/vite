<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter.js'

const counter = useCounterStore()

const { count, name, doubleCount, sayHello } = storeToRefs(counter)

// 存取 actions
// const { increment, decrement, incrementByAmount, fetchSomeData } = counter

const fetchData = async () => {
    await counter.fetchSomeData()
}

</script>

<template>
    <h2>Counter Display</h2>
    <p>name: {{ name }}</p>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>sayHello: {{ sayHello }}</p>

    <button @click="counter.increment"> Increment </button>
    <button @click="counter.decrement"> Decrement </button>
    <button @click="counter.incrementByAmount(5)"> Increment By 5 </button>
    <button @click="fetchData"> Fetch Data </button>
</template>