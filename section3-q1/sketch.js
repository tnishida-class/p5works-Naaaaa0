// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("We like keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(185,245,66);

  beginShape();
  vertex(0,0);
  vertex(w+p*2,0);
  vertex(w+p*2,(h+p*2)*1/4);
  vertex(8+w+p*2,(h+p*2)*1/2);
  vertex(w+p*2,(h+p*2)*3/4);
  vertex(w+p*2,h+p*2);
  vertex(0,h+p*2);
  endShape();

  //rect(0, 0, w + p * 2, h + p * 2);
  //triangle(w+p*2,(h+p*2)/4,w+p*2,(h+p*2)3/4, w+p*2+5,(h+p*2)/2)
  fill(66, 72, 245);
  text(t, p, (h + p)-6);

}
