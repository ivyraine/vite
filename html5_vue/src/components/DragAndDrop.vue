<template>

    <div id="leftbox">
        <img ref="imageRef"
        src="/images/Shinnosuke2.png" alt="新之助" 
        draggable="true"
        @dragstart="startDrag"
        @dragend="endDrag" />
    </div>
    <div id="rightbox"
        ref="rightboxRef"
        @dragover.prevent
        @drop.prevent="dropped"
    ></div>

</template>

<script setup>
import { ref } from "vue"

const imageRef = ref(null)
const rightboxRef = ref(null)

const startDrag = e => {
    const image = imageRef.value
    const data = `<img src="${image.src}" alt="${image.alt}">`
    e.dataTransfer.setData('Shin', data)
}

const endDrag = () => {
    const image = imageRef.value
    image.style.display = 'none'
}
const dropped = (e) => {
    // e.preventDefault()
    rightboxRef.value.innerHTML = e.dataTransfer.getData('Shin')
}


</script>

<style scoped>
#leftbox{
    border: 5px dashed #abc;
    width: 240px;
    height: 240px;
    padding: 5px;
    margin: 5px;
    
    float: left;
}
#rightbox{
    border: 5px dashed #cba;
    width: 240px;
    height: 240px;
    padding: 5px;
    margin: 5px;
    
    float: left;
}
</style>