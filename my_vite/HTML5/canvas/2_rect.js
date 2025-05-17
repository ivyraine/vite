function doFirst(){
    let canvas = document.querySelector('#canvas')
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
    
    //橡皮查
    //context.clearRect(0, 0, canvas.width, canvas.height)
}
window.addEventListener('load', doFirst)


//三種寫法
/* 
function doFirst(){}  //傳統寫法
window.addEventListener('load', doFirst)
*/

/*
const doFirst = () => {} //IIFE寫法
window.addEventListener('load', doFirst)
*/

/*
window.addEventListener('load', ()=>{})
*/