function doFirst() {
    let canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();

    let gap = 50
    if (canvas.width > canvas.height) {
        range = canvas.width / gap
    } else {
        range = canvas.height / gap
    }

    for (let i = 0; i <= range; i++) {
        let interval = i * gap

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    // =====

    context.strokeStyle='red'
    context.lineWidth=20;

    //lineCap
    context.beginPath();
    context.lineCap='butt';
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

    context.beginPath();
    context.lineCap='round';
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap='square';
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

    // lineJoin
    context.lineJoin='miter';
    context.strokeRect(100, 300, 100, 200);

    context.lineJoin='bevel';
    context.strokeRect(300, 300, 100, 200);
    
    context.lineJoin='round';
    context.strokeRect(500, 300, 100, 200);
    
    

}
window.addEventListener('load', doFirst)
