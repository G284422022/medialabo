// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let i = document.querySelector('#print');
i.addEventListener('click',hantei);

function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector('input[name="yoso"]');
  let yoso = parseInt(y.value);
  let syouri = false;
  let kaisu2 = kaisu +1;
  
  let syutuanswer = document.querySelector('span#answer');
  syutuanswer.textContent = yoso;

  console.log(kaisu2+"回目の予想: "+yoso );
  let result = document.querySelector('p#result');
if(kaisu < 3 && syouri === false){
  let syutusu = document.querySelector('span#kaisu');
  syutusu.textContent = kaisu2+'回目の予想: ';
  if( kotae === yoso){
    result.textContent = '正解です．おめでとう!';
    kaisu = 3;
    syouri = true;
  }else if
  (kotae > yoso){
    result.textContent ='まちがい．答えはもっと大きいですよ';
  }else{
    result.textContent = 'まちがい．答えはもっと小さいですよ';
  }
}else{
  result.textContent = "答えは"+kotae+"でした．すでにゲームは終わっています";
}
kaisu = kaisu + 1;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}