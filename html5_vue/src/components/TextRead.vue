<template>

    <input type="file" @change="fileChange" multiple>
    <p>
        <textarea :value="fileInfo" rows="5" cols="70" readonly></textarea>
    </p>

    <h2>Content here</h2>
        <textarea v-model="fileContent" rows="25" cols="70" readonly></textarea>
</template>

<script setup>

import { ref } from "vue";

const fileInfo = ref('')
const fileContent = ref('')

const fileChange = e => {
const file = e.target.files[0]
    
    //顯示檔案內容
    fileInfo.value = `File name: ${file.name}
File size: ${file.size} byte
File type: ${file.type}
File modified: ${file.lastModifiedDate}
`

    //讀取檔案內容
    const readFile = new FileReader()
    readFile.readAsText(file)

    readFile.addEventListener('load', () => {
        fileContent.value = readFile.result
    })
}
</script>