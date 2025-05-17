function doFirst() {
    let canvas = document.querySelector('#canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
    
    drawCanvas();
    
    // Add event listener for window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawCanvas();
    });
}

function drawCanvas() {
    // Get the current dimensions
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    
    // Calculate the scale factor based on the original dimensions (assuming original was 1440x1080)
    const originalWidth = 1440;
    const originalHeight = 1025;
    const scaleX = canvasWidth / originalWidth;
    const scaleY = canvasHeight / originalHeight;
    
    // Use the smaller scale to maintain aspect ratio
    const scale = Math.min(scaleX, scaleY);
    
    // Calculate the center point for positioning
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    
    // Clear the canvas
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Optional: Draw grid
    drawGrid();
    
    // Apply scaling transformation
    context.save();
    context.translate(centerX, centerY);
    context.scale(scale, scale);
    context.translate(-originalWidth/2, -originalHeight/2);
    
    // Now draw all the elements
    drawElements();
    
    // Restore the context
    context.restore();
}

function drawGrid() {
    // Only draw grid if needed
    const drawGridLines = false;
    
    if (drawGridLines) {
        context.beginPath();
        context.lineWidth = 1;
        
        let gap = 50;
        let rangeX = Math.ceil(context.canvas.width / gap);
        let rangeY = Math.ceil(context.canvas.height / gap);
        
        for (let i = 0; i <= rangeX; i++) {
            let interval = i * gap;
            // Vertical lines
            context.moveTo(interval, 0);
            context.lineTo(interval, context.canvas.height);
        }
        
        for (let i = 0; i <= rangeY; i++) {
            let interval = i * gap;
            // Horizontal lines
            context.moveTo(0, interval);
            context.lineTo(context.canvas.width, interval);
        }
        
        context.strokeStyle = 'rgba(0,0,0,0.3)';
        context.stroke();
    }
}

function drawElements() {
    // Logo circle
    context.beginPath();
    context.fillStyle = '#402E1E';
    context.strokeStyle = '#402E1E';
    context.lineWidth = 5;
    context.arc(721, 270, 167, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    // Bird body dark green
    context.beginPath();
    context.fillStyle = '#176167';
    context.strokeStyle = '#176167';
    context.lineWidth = 5;
    context.moveTo(720, 260);
    context.lineTo(720, 385);
    context.lineTo(650, 385);
    context.lineTo(650, 260);
    context.closePath();
    context.fill();
    context.stroke();

    // Beak
    context.beginPath();
    context.fillStyle = '#DB5C27';
    context.strokeStyle = '#DB5C27';
    context.lineWidth = 5;
    context.moveTo(720, 175);
    context.lineTo(720, 260);
    context.lineTo(590, 260);
    context.quadraticCurveTo(600, 170, 720, 175);
    context.fill();
    context.stroke();

    // Bird head orange
    context.beginPath();
    context.fillStyle = '#DB5C27';
    context.strokeStyle = '#DB5C27';
    context.lineWidth = 5;
    context.moveTo(838, 385);
    context.lineTo(720, 385);
    context.lineTo(720, 385);
    context.lineTo(720, 260);
    context.closePath();
    context.fill();
    context.stroke();

    // Bird head dark green
    context.beginPath();
    context.fillStyle = '#163C52';
    context.strokeStyle = '#163C52';
    context.lineWidth = 5;
    context.moveTo(720, 175);
    context.quadraticCurveTo(865, 170, 840, 385);
    context.quadraticCurveTo(730, 370, 720, 260);
    context.closePath();
    context.fill();
    context.stroke();

    // Bird eye
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.arc(782, 260, 44, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    // Bird body green
    context.beginPath();
    context.fillStyle = '#29786A';
    context.strokeStyle = '#29786A';
    context.lineWidth = 5;
    context.moveTo(720, 385);
    context.lineTo(720, 437);
    context.quadraticCurveTo(648, 435, 600, 385);
    context.closePath();
    context.fill();
    context.stroke();

    // Bird body yellow
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.moveTo(842, 385);
    context.quadraticCurveTo(788, 442, 720, 437);
    context.lineTo(720, 385);
    context.closePath();
    context.fill();
    context.stroke();

    // Logo mountain
    context.beginPath();
    context.fillStyle = '#163D52';
    context.strokeStyle = '#163D52';
    context.lineWidth = 5;
    context.moveTo(460, 1025);
    context.lineTo(680, 525);
    context.lineTo(710, 640);
    context.lineTo(725, 550);
    context.lineTo(740, 630);
    context.lineTo(760, 525);
    context.lineTo(980, 1025);
    context.closePath();
    context.fill();
    context.stroke();

    // Light 左上
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.moveTo(360, 602);
    context.lineTo(210, 500);
    context.lineTo(180, 580);
    context.closePath();
    context.fill();
    context.stroke();

    // Light 左下
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.moveTo(358, 645);
    context.lineTo(180, 665);
    context.lineTo(210, 745);
    context.closePath();
    context.fill();
    context.stroke();

    // Light 右上
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.moveTo(1080, 610);
    context.lineTo(1225, 510);
    context.lineTo(1260, 590);
    context.closePath();
    context.fill();
    context.stroke();

    // Light 右下
    context.beginPath();
    context.fillStyle = '#ECA526';
    context.strokeStyle = '#ECA526';
    context.lineWidth = 5;
    context.moveTo(1080, 655);
    context.lineTo(1260, 675);
    context.lineTo(1225, 755);
    context.closePath();
    context.fill();
    context.stroke();
}

function loadImage() {
    let pic1 = new Image();
    pic1.src = './logoWithMountain.jpg';
    pic1.onload = function() {
        context.globalAlpha = 0.3;
        context.drawImage(pic1, 0, 0, context.canvas.width, context.canvas.height);
    };
}

window.addEventListener('load', doFirst);