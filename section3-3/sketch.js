// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
   return ((y % 4 == 0) && (y % 100 !=0 ) || (y % 400 == 0 ))?366:365;
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  for(let i = 1970; i < y; i++){
    count += daysInYear(i)+ dayOfYear(y,m,d);
    if (count%7==3){
      return 0;
    }
    else if (count%7==4){
      return 1;
    }
    else if (count%7==5){
      return 2;
    }
    else if (count%7==6){
      return 3;
    }
    else if (count%7==0){
      return 4;
    }
    else if (count%7==1){
      return 5;
    }
    else (count%7==2){
      return 6;
    }
  }
  // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  0="日"
  1="月"
  2="火"
  3="水"
  4="木"
  5="金"
  6="土"
  return a[dow];
}
