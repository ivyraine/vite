function doFirst(){
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')

    context.fillStyle='red';
    context.strokeStyle='blue';
    context.lineWidth=5;    

    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    context.closePath();   
    
    // context.fill();
    context.stroke();
}  
window.addEventListener('load', doFirst)