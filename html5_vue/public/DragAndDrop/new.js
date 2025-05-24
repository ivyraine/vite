// 傳統函數 --> function doFirst(){}

// IIFE + 箭頭函數 --> const doFirst = () => {}
const doFirst = () => {
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    image = document.querySelector('#image')
    image.addEventListener('dragstart', startDrag)
    image.addEventListener('dragend', endDrag)

    rightbox = document.querySelector('#rightbox')
    // rightbox.addEventListener('dragenter', e => e.preventDefault())
    rightbox.addEventListener('dragover', e => e.preventDefault())
    rightbox.addEventListener('drop', dropped)
}

const startDrag = e => {
    // let data = `<img src="../../images/Shinnosuke/Shinnosuke2.png" alt="新之助">`
    let data = `<img src="${image.src}" alt="${image.alt}">`
    // e.dataTransfer.setData('image/png', data)
    e.dataTransfer.setData('Shin', data)
}
const endDrag = () => {
    image.style.display = 'none'
    // image.style.visibility = 'hidden'
}
const dropped = e => {
    e.preventDefault()
    // rightbox.innerHTML = e.dataTransfer.getData('image/png')
    rightbox.innerHTML = e.dataTransfer.getData('Shin')
}

window.addEventListener('load', doFirst)