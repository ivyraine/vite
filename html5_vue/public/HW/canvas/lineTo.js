
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
    pic1.src = './logoWithMountain.jpg'
    // pic1.addEventListener('load', loadImage)

    //logo circle
    context.beginPath();

    context.fillStyle='#402E1E';
    context.strokeStyle='#402E1E';
    context.lineWidth=5;    

    context.arc(721, 270, 167, 0, 2 * Math.PI);  
    context.fill();
    context.stroke(); 

    //bird body dark green
    context.beginPath();

    context.fillStyle='#176167';
    context.strokeStyle='#176167';
    context.lineWidth=5;  

    context.moveTo(720, 260);
    context.lineTo(720 , 385);
    context.lineTo(650 , 385);
    context.lineTo(650 , 260);
    context.closePath();   

    context.fill();
    context.stroke();


    //beak
    context.beginPath();

    context.fillStyle='#DB5C27';
    context.strokeStyle='#DB5C27';
    context.lineWidth=5;  

    context.moveTo(720, 175);
    context.lineTo(720 , 260);
    context.lineTo(590 , 260);
    context.quadraticCurveTo(600, 170, 720, 175);

    context.fill();
    context.stroke();


    
    //bird head orange
    context.beginPath();

    context.fillStyle='#DB5C27';
    context.strokeStyle='#DB5C27';
    context.lineWidth=5;  

    context.moveTo(838, 385);
    context.lineTo(720 , 385);
    context.lineTo(720 , 385);
    context.lineTo(720 , 260);
    context.closePath();   

    context.fill();
    context.stroke();


    //bird head dark green
    context.beginPath();

    context.fillStyle='#163C52';
    context.strokeStyle='#163C52';
    context.lineWidth=5;  

    context.moveTo(720, 175);
    context.quadraticCurveTo(865, 170, 840, 385);
    context.quadraticCurveTo(730, 370, 720, 260);
    context.closePath();   

    context.fill();
    context.stroke();

    //bird eye
    context.beginPath();

    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;    

    context.arc(782, 260, 44, 0, 2 * Math.PI);  
    context.fill();
    context.stroke(); 

    //bird body green
    context.beginPath();

    context.fillStyle='#29786A';
    context.strokeStyle='#29786A';
    context.lineWidth=5;  

    context.moveTo(720 , 385);
    context.lineTo(720 , 437);
    context.quadraticCurveTo(648, 435, 600, 385);
    context.closePath();   

    context.fill();
    context.stroke();

    //bird body yellow
    context.beginPath();

    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;  

    context.moveTo(842, 385);
    context.quadraticCurveTo(788, 442, 720, 437);
    context.lineTo(720 , 385);
    context.closePath();   

    context.fill();
    context.stroke();
     
    //logo mountain
    context.beginPath(); 
    
    context.fillStyle='#163D52';
    context.strokeStyle='#163D52';
    context.lineWidth=5;    

    context.moveTo(460, 1025);
    context.lineTo(680 , 525);
    context.lineTo(710 , 640);
    context.lineTo(725 , 550);
    context.lineTo(740 , 630);
    context.lineTo(760 , 525);
    context.lineTo(980 ,1025);
    context.closePath();   
    
    context.fill();
    context.stroke();

    //light 左上
    context.beginPath(); 
    
    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;    

    context.moveTo(360, 602);
    context.lineTo(210 , 500);
    context.lineTo(180 , 580);
    context.closePath();   
    
    context.fill();
    context.stroke();


    //light 左下
    context.beginPath(); 
    
    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;    

    context.moveTo(358, 645);
    context.lineTo(180 , 665);
    context.lineTo(210 , 745);
    context.closePath();   
    
    context.fill();
    context.stroke();

    //light 右上
    context.beginPath(); 
    
    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;    

    context.moveTo(1080, 610);
    context.lineTo(1225 , 510);
    context.lineTo(1260 , 590);
    context.closePath();   
    
    context.fill();
    context.stroke();


    //light 左下
    context.beginPath(); 
    
    context.fillStyle='#ECA526';
    context.strokeStyle='#ECA526';
    context.lineWidth=5;    

    context.moveTo(1080, 655);
    context.lineTo(1260 , 675);
    context.lineTo(1225 , 755);
    context.closePath();   
    
    context.fill();
    context.stroke();
    
}  

function loadImage(){
    context.globalAlpha=0.3;    
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
}

window.addEventListener('load', doFirst)


