function doFirst() {
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')


    context.font='bold 50px Tahoma';
    
    context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline='alphabetic';
    

    // context.fillText('google', 100, 100);
    context.strokeText('google', 100, 100);

    //輔助線
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle='red';
    context.stroke();
    
    
    
    
    
 

}
window.addEventListener('load', doFirst)