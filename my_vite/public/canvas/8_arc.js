function doFirst(){
    let canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();
    
    let gap = 50
    if(canvas.width > canvas.height){
        range = canvas.width / gap
    }else{
        range = canvas.height / gap
    }

    for(let i = 0; i <= range; i++){
        let interval = i * gap

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval); 
        context.fillText(interval, 0, interval);        
        
        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);      
    }    
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // =====

    // 分成四分之一
    context.beginPath();

    context.moveTo(           0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2,             0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle='rgba(0,0,0,0.7)'; 
    context.stroke();
    // =====

    context.strokeStyle='red'; 
    context.lineWidth=5;    

    // 左上
    context.beginPath();

    context.translate(250, 200);  // 將 (250, 200) --> (0, 0)    

    context.arc(0, 0, 120, 0, Math.PI);  // false by default
    // context.arc(250, 200, 120, 0, Math.PI, true);
    context.stroke(); 
    
    context.translate(-250, -200); 

    // 右上
    context.beginPath();

    context.translate(750, 200); 

    context.arc(0, 0, 120, 0.3 * Math.PI, 1.7 * Math.PI);  
    context.stroke(); 

    context.translate(-750, -200);

    // 左下
    context.beginPath();

    context.translate(250, 600);

    context.arc(0, 0, 120, 0, 2 * Math.PI);  
    context.stroke(); 
    // 右下
    
    
    


}
window.addEventListener('load', doFirst)

