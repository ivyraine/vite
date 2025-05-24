<template>
    <h2>{{ fileName }}</h2>
    <div 
        id="dropzone" 
        @dragover.prevent="dragOver"
        @drop.prevent="dropped">

        <img :src="imgURL" v-if="imgURL">
    </div>
</template>

<script setup>

import { ref } from "vue";

const fileName = ref('')
const imgURL = ref('')

const dragOVer = (e) => {
    //可以自訂特效
    e.dataTransfer.dropEffect = 'copy'
}

const dropped = e => {
    const file = e.dataTransfer.files[0]
    fileName.value = file.name

    //讀取圖檔內容
    const readFile = new FileReader()
    readFile.readAsDataURL(file)

    readFile.addEventListener('load', () => {
        imgURL.value = readFile.result
    })
}
</script>

<style scoped>
#dropzone{
    border: 1px solid #ccc;
    width: 400px;
    height: 400px;
    overflow: hidden;
}

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}


</style>