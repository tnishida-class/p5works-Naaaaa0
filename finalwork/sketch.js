// 最終課題を制作しよう
let x, y,a,b, vx, vy,wa, wb, count;
let grabbed;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  x = width / 2;
  y = height / 2;
  a = width/10;
  b = width/10
  vx = 5;
  vy = 5;
  wa = 12;
  wb = 12;
  count=0;
}

function reset(){
  x=width/2;
  y=height/2;
  vx=0;
  vy=0;
  grabbed = false;
}

function draw(){
  background(160, 192, 255);
  a += wa;
  b += wb;
  arc(a,b,50,50,0,PI+QUARTER_PI,CHORD);
  if(a<0||a>width){wa = -1*wa;}
  if(b<0||b>height){wb = -1*wb;}
  a=constrain(a,0,width);
  b=constrain(b,0,height);

  star(x,y,40,PI/36);
  if(!grabbed){
    x += vx;
    y += vy;
    if(x<0||x>width){vx = -1*vx;}
    if(y<0||y>height){vy = -1*vy;}
    x=constrain(x,0,width);
    y=constrain(y,0,height);
  }
  if(dist(mouseX,mouseY,a,b)&&dist(x,y,a,b)<10){
    vx=0;
    vy=0;
    wa=0;
    wb=0;
  }
}

function star(x, y, r, angle){
  noStroke();
  fill(255, 204, 0);
  beginShape();
  count=count+1
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + count*angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = x + cos(theta) * r;
    var y = y + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}


function keyPressed(){
  if(key==" "){reset();}
}

function mousePressed(){
  grabbed= dist(mouseX,mouseY,x,y)<40
}

function mouseDragged(){
  if(grabbed){
    x=mouseX;
    y=mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed=false;
    vx=mouseX-pmouseX;
    vy=mouseY-pmouseY;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
