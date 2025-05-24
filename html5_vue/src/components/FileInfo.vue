<template>

    <input type="file" @change="fileChange" multiple>
    <p>
        <textarea :value="fileInfo" rows="5" cols="70"></textarea>
    </p>
</template>

<script setup>

import { ref } from "vue";

const fileInfo = ref('')

const fileChange = e => {
const file = e.target.files[0]

    // alert(file)
    // console.log(file)

    let message = ``
    message += `File name: ${file.name} \n`
    message += `File size: ${file.size} byte \n`
    message += `File type: ${file.type} \n`
    message += `File modified: ${file.lastModifiedDate} \n`

    fileInfo.value = message
}
</script>