function preload(){
    
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,10,10,550,450);
    fill(255,255,255,0);
    stroke(71, 255, 240);
    rect(0, 0, 570, 470, 20);
}