function doFirst(){
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')

    context.font='bold 50px Tahoma';

    // 第一個字
    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline='alphabetic';  //　alphabetic by default
    
    // context.fillText('google', 100, 100);
    context.strokeText('google', 100, 100);

    // 輔助線
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle='red';
    context.stroke();
    
    //第二個字
    context.shadowColor = 'red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    
    context.fillText('google', 100, 200);      

    //第三個字
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=15;

    context.fillStyle='#fff';
    
    context.fillText('google', 100, 300);      

    //第四個字
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=10;

    context.shadowColor = 'blue';
    context.fillText('google', 100, 400);    
    
    context.shadowColor = 'red';
    context.fillText('google', 100, 400);
    
}  
window.addEventListener('load', doFirst)