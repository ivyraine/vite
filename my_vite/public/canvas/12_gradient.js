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

    //線性漸層
    // let linear = context.createLinearGradient(50, 50, 350, 250); //對角線
    // let linear = context.createLinearGradient(50, 150, 350, 150);  //水平
    let linear = context.createLinearGradient(200, 50, 200, 250);  //垂直

    linear.addColorStop(  0, 'red');
    linear.addColorStop(0.5, 'yellow');
    linear.addColorStop(  1, 'blue');

    context.fillStyle=linear;
    context.fillRect(50, 50, 300, 200);
    


    //放射狀漸層
    let radial = context.createRadialGradient(200, 450, 40, 130, 450, 120);

    radial.addColorStop(  0, 'red');
    radial.addColorStop(  1, 'blue');

    context.fillStyle=radial;
    context.fillRect(50, 350, 300, 200);

    context.beginPath();
    context.translate(600, 200);
    
    let radius = 150
    context.lineWidth=15;

    let circle = context.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
    circle.addColorStop(0, '#666');
    circle.addColorStop(0.5, '#fff');
    circle.addColorStop(1, '#666');

    
    context.arc(0, 0, radius,0, 2*Math.PI);
    context.strokeStyle=circle;
    
    context.stroke();

    context.translate(-600, -200);
    
}
window.addEventListener('load', doFirst)
