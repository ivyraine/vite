function doFirst(){
    let canvas = document.querySelector('#canvas')
    // let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.fillStyle='red';
    context.strokeStyle='blue';   
    context.lineWidth=10;     

    context.fillRect(100, 100, 300, 200)
    // context.strokeRect(100, 100, 300, 200)
    context.clearRect(150, 150, 50, 50)

    context.rect(500, 400, 300, 300);
    context.fill();
    context.stroke();  

    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height)
}  
window.addEventListener('load', doFirst)


// 1
/*
function doFirst(){}  // 傳統的函數寫法
window.addEventListener('load', doFirst)
*/

// 2
/*
const doFirst = () => {}  // IIFE + arrow function
window.addEventListener('load', doFirst)
*/

// 3
// window.addEventListener('load', () => {})