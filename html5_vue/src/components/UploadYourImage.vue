<template>
   <div class="box" ref="boxRef">
        <div class="add" v-if="!imgURL">+</div>
        <input type="file" @change="fileChange" class="theFile">
        <img :src="imgURL" v-if="imgURL" alt="avatar">
   </div>
   <div style="width: 300px;text-align: center;margin: 10px;">
       <button style="font-size: large;">Upload</button>
   </div>
</template>

<script setup>
import { ref } from "vue";

const boxRef = ref(null)
const imgURL = ref('')


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
.box{
    border: 8px dashed #ccc;
    width: 300px;
    height: 300px;

    position: relative;
    overflow: hidden;
}

.add{
    font: bold 100px Tahoma;
    color: #ccc;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.theFile{
    width: 300px;
    height: 300px;
    position: absolute;

    opacity: 0;
}

img{
    width: 100%;
    height: 100%;
}

</style>