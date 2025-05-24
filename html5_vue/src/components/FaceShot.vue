<template>
   <div class="member">
        <img :src="imgURL" alt="avatar">
        <input type="file" @change="fileChange">
   </div>
</template>

<script setup>
import { ref } from "vue";

const imgURL = ref(new URL('/public/images/Shinnosuke2.png', import.meta.url).href)

const fileChange = e => {
const file = e.target.files[0]


    //讀取圖檔內容
    const readFile = new FileReader()
    readFile.readAsDataURL(file)

    readFile.addEventListener('load', () => {
        imgURL.value = readFile.result
    })
}
</script>

<style scoped>
.member{
    border: 1px solid #ccc;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    position: relative;
    overflow: hidden;
}
.member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
}

.member input[type="file"]{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    
    opacity: 0;

}


</style>