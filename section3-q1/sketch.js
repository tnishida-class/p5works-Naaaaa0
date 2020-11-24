// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("We like keyakizaka46", 0,0,70,66,135,245,245,152,66);
}

function balloon(t,x,y,z,a,b,c,d,e,f){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = z;
  noStroke();
  fill(a,b,c);
  rect(x,y, w + z * 2, h + z * 2);
  triangle(w+z*2,(h+z*2)/3,w+z*2+(w+z*2-x)/4,(h+z*2)/2,w+z*2,(h+z*2)*2/3)
  fill(d,e,f);
  text(t, z, h/2+z);
}
//beginShape();
//vertex(0,0);
//vertex(w+p*2,0);
//vertex(w+p*2,(h+p*2)*1/4);
//vertex(8+w+p*2,(h+p*2)*1/2);
//vertex(w+p*2,(h+p*2)*3/4);
//vertex(w+p*2,h+p*2);
//vertex(0,h+p*2);
//endShape();
