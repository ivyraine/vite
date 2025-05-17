


function doFirst(){
    let canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();

    context.lineWidth=1;    

    
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
        // context.fillText(interval, 0, interval);        
        
        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        // context.fillText(interval, interval, 10);      
    }    
    context.strokeStyle='rgba(0,0,0,0.3)';    
    // context.stroke();

    pic1 = new Image()
    pic1.src = './image.png'
    // pic1.addEventListener('load', loadImage)



    //八角星形
    context.beginPath(); 

    context.strokeStyle='blue';
    context.lineWidth=5;    

    context.moveTo(502, 300);
    context.lineTo(660, 78);
    context.lineTo(600, 330);
    context.lineTo(892, 275);
    context.lineTo(648, 420);
    context.lineTo(900, 560);
    context.lineTo(600, 500);
    context.lineTo(665, 760);
    context.lineTo(505, 540);
    context.lineTo(348, 742);
    context.lineTo(400, 500);
    context.lineTo(120, 555);
    context.lineTo(360, 420);
    context.lineTo(112, 275);
    context.lineTo(400, 330);
    context.lineTo(340, 80);
    context.closePath();   
    
    context.stroke();
}  

function loadImage(){
    context.globalAlpha=0.3;    
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
}

window.addEventListener('load', doFirst)


