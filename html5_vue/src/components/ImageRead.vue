<template>

    <input type="file" @change="fileChange" multiple>
    <p>
        <textarea :value="fileInfo" rows="5" cols="70" readonly></textarea>
    </p>

    <h2>Content here</h2>
    <img :src="imgURL" style="max-width: 400px; max-height: 400px">
</template>

<script setup>

import { ref } from "vue";

const fileInfo = ref('')
const imgURL = ref('')

const fileChange = e => {
const file = e.target.files[0]
    
    //顯示檔案內容
    fileInfo.value = `File name: ${file.name}
File size: ${file.size} byte
File type: ${file.type}
File modified: ${file.lastModifiedDate}
`

    //讀取圖檔內容
    const readFile = new FileReader()
    readFile.readAsDataURL(file)

    readFile.addEventListener('load', () => {
        imgURL.value = readFile.result
    })
}
</script>