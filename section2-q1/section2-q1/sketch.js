// 小手調べ
function setup(){
  createCanvas(100,100)
  noFil();
  for(let i = 0; i < 10; i++){
   ellipse(50,50,(i+1)*5)
  if(i < 4){
    stroke(255,0,0)
  }
  else(i > 5) {
    stroke(0,0,255)
  }
    // BLANK[1]
  }
}
