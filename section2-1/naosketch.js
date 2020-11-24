// テキスト「繰り返し」
function setup() {
  createCanvas(100,100);
  background(196);

  for(let i = 0; i < 9; i++){
   if(i % 2 == 0){
     strokeWeight(2);
   }
   else{
     strokeWeight(1)
   }
   let x = 10 + i * 10;
   line(x, 0,x, 100);
  }
}

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0;() i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
