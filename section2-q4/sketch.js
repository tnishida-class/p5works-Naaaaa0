//EU国旗
function setup(){
  createCanvas(300, 200);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
    const x = 150 + cos(theta) * 50; // 関数 cos の戻り値を使用
    const y = 100 + sin(theta) * 50; // 関数 sin の戻り値を使用
    star(x,y,10)
  }
}

function star(cx, cy, r){
 fill(255, 204, 0);
 beginShape();    // 点つなぎを始める
 for(let i = 0; i < 5; i++){
  const theta = TWO_PI * i * 2 / 5 - HALF_PI;
  const x = cx + cos(theta) * r;
  const y = cy + sin(theta) * r;
  vertex(x, y);  // 次につなぐ点を１つ増やす
 }
  endShape(CLOSE); // 点つなぎを終わる
  //ellipse(x, y, 10); // 関数 ellipse の副作用で円が描画される
}


// ギリシャ国旗
//function setup() {
  //const blue = color(0, 51, 160);
  //createCanvas(270, 180);
  // noStroke();
  //background(255);

  //let d = height / 9; // 縞1本の太さ

  //for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    //rect(0, i * d, width, (i + 1) * d);
  //}

  //fill(blue);
  //let size = d * 5;
  //rect(0, 0, size, size);

  //fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
//}
