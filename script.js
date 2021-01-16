/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('canvas1');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.onload = function(){
    moon();
 
    for(let i = 0; i < 150;i++) {
        x= Math.random() * canvas.width;
        y = Math.random() * canvas.height; 
        let colorStarArr = ['rgba(254, 240, 150, 1)', 'rgba(255, 236, 139, 1)', 'rgba(254, 250, 212, 1)', 'rgba(255, 249, 222, 1)'];
        let color = colorStarArr[Math.round(Math.random() * colorStarArr.length)]
        createStar(x,y,color);
   
    }

    for (let i=0; i < 50;i++) {
    drawBuilding();
    }
}
// stars
function createStar (x,y, color) {
    let b = (Math.random() * 5) + 3;
    let a = (Math.random() * 2) + 1;
    
    let d = 2*a;
    let e= 3*a;
    let f= 5*a;
    let g = b+a;
    let h = a/2;
   
    c.shadowColor = 'gold';
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowBlur = 15;
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(x + h,y + b);
    c.lineTo(x + e,y + d);
    c.lineTo(x+a,y+g);
    c.lineTo(x + d,y + f);
    c.lineTo(x,y + e);
    c.lineTo(x - d,y + f);
    c.lineTo(x - a,y + g);
    c.lineTo(x - e,y + d);
    c.lineTo(x - h, y +b);
    c.lineTo(x,y);
    c.closePath();
    c.fill();

    
}

// moon on radialgradient background
function moon (){
    let x0 = Math.random() * (canvas.width - 200) + 200;
    let y0 = (Math.random() * (canvas.height/3 - 100)) + 100;
    let gradient = c.createRadialGradient(x0,y0,0,x0,y0,100);
    gradient.addColorStop(0.1, 'rgba(240, 240, 214, 1)');
    gradient.addColorStop(0.5, 'rgba(254, 250, 212, 1)');
    gradient.addColorStop(0.6, 'rgba(255, 249, 222, 0.5)');
    gradient.addColorStop(0.9,'black');
    c.fillStyle = gradient;
    c.fillRect(0,0,canvas.width,canvas.height);
   
}
   


function drawBuilding () {
    // buildings
    let w = (Math.random() * canvas.width/15) + 50;
    let x = Math.random() * canvas.width;
    let h = (Math.random() * canvas.height/2.5) + 50;
    let y = canvas.height - h;
     
    c.shadowColor = 'gray';
    c.shadowOffsetX = 5;
    c.shadowOffsetY = 5;
    c.shadowBlur = 10;
    c.fillStyle = 'lightgray';
    c.fillRect(x, y, w, h);
    c.fill();
    c.strokeStyle = 'gray';
    c.strokeRect(x, y, w, h);
    c.stroke();
    c.save();
   
    // windows
    let w1 = (Math.random() * w/3) + 5;
    let h1 = (Math.random() * h/3) + 5;
    //let x1 =Math.random() * ((((x+w)-w1)-x)-5) + x;
    //let y1 =Math.random() * (((y-h1) - (y-h))- 5) + y;
    let x1 = x + 5;
    let y1 = y + 5;
    let colorArr = ['gold', 'yellow', 'rgba(128, 128, 128, 0.7)','rgba(128, 128, 128, 0.5)', 'rgba(128, 128, 128, 0.1)', 'rgba(128, 128, 128, 1)'];
    c.restore();

    //window1
    c.shadowColor = 'rgba(240, 255, 0, 0.5)';
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowBlur = h1/40;
    c.strokeStyle = 'gray';
    c.fillStyle = colorArr[Math.round(Math.random() * colorArr.length)];
    c.strokeRect(x1, y1,w1,h1);
    c.fillRect(x1,y1,w1,h1);
    c.stroke();

    //other windows
    for (let i = 0; i<h-(h/3)-5; i +=h1+5) {
        let w2 = w1;
        let h2 = h1;
        let x2 = x1;
        let y2 = y1 + h1 + i +5;
        c.strokeStyle = 'gray';
        c.fillStyle = colorArr[Math.round(Math.random() * 3)];
        c.strokeRect(x2, y2,w2,h2);
        c.fillRect(x2,y2,w2,h2);
        c.stroke();
        
        for (let j =0; j < w-(2*w1) -5; j+=w1+5) {
            let w2 = w1;
            let h2 = h1;
            let x2 = x1 + w1 + j +5;
            let y2 = y1;
            c.strokeStyle = 'gray';
            c.fillStyle = colorArr[Math.round(Math.random() * 3)];
            c.strokeRect(x2, y2,w2,h2);
            c.fillRect(x2,y2,w2,h2);
            c.stroke();  

            for (let k = 0; k < w-(2*w1)-5; k+=w1+5) {
                let w2 = w1;
                let h2 = h1;
                let x2 = x1 + w1 + j + 5;
                let y2 = y1 + h1 + 5;
                c.strokeStyle = 'gray';
                c.fillStyle = colorArr[Math.round(Math.random() * 3)];
                c.strokeRect(x2, y2,w2,h2);
                c.fillRect(x2,y2,w2,h2);
                c.stroke();
            }
                for (let l =0; l < w-(2*w1)-5; l+=w1+5) {
                    let w2 = w1;
                    let h2 = h1;
                    let x2 = x1 + w1 + j + 5;
                    let y2 = y1 + 2*h1 + 10;
                    c.strokeStyle = 'gray';
                    c.fillStyle = colorArr[Math.round(Math.random() * 3)];
                    c.strokeRect(x2, y2,w2,h2);
                    c.fillRect(x2,y2,w2,h2);
                    c.stroke();
                }
                    for (let m =0; m < w-(2*w1); m+=w1+5) {
                        let w2 = w1;
                        let h2 = h1;
                        let x2 = x1 + w1 + j + 5;
                        let y2 = y1 + 3*h1 + 15;
                        c.strokeStyle = 'gray';
                        c.fillStyle = colorArr[Math.round(Math.random() * 3)];
                        c.strokeRect(x2, y2,w2,h2);
                        c.fillRect(x2,y2,w2,h2);
                        c.stroke();
                    }
        }
   
    
    }
  
    
}



window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    moon();

    for(let i = 0; i < 100;i++) {
        x= Math.random() * canvas.width;
        y= Math.random() * canvas.height;
        let colorStarArr = ['rgba(254, 240, 150, 1)', 'rgba(255, 236, 139, 1)', 'rgba(254, 250, 212, 1)', 'rgba(255, 249, 222, 1)'];
        let color = colorStarArr[Math.round(Math.random() * colorStarArr.length)]
        createStar(x,y,color);
   
    }

    for (let i=0; i < 50;i++) {
    drawBuilding();
    }

});