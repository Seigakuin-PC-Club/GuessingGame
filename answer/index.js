// グローバル変数を設定(グローバルとはどこでも使える変数)
var randomNum; // 答えとなる数字
var guessTimes = 0; // 解答した回数

init(); // 初期化コードの実行

// 初期化コード
function init() {
  setRandomNum(); // 乱数で設定された数字を生成
}

//乱数で設定された数字を生成するためのfunction
function setRandomNum() {
  randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
}

// index.htmlにある id を input1 に設定した domエレメントを取得
const inputDOM = document.getElementById("input1");

// index.htmlにある id を output1 に設定した domエレメントを取得
const outputDOM = document.getElementById("output1");

// キーボードがkeypressされたらこのfunctionを実行する
// addEventListenerは大事なfunction!!
document.addEventListener("keypress", function(event) {
  // eventとはキーが押されたときのデータを取得
  if (event.keyCode === 13) {
    // 13はreturnキーの番号
    console.log(event); // eventデータをconsole.logに表示
    onkeypress(); // 下記のonkeypress function を実行
  }
});

// 上記の return キー が押されたときに実行する function
function onkeypress() {
  clearInterval(timeout); // 以前に setTimeoutを設定しているならそれを消す
  var guess = inputDOM.value; // inputに入力された番号を guess に格納する
  var newContent = ""; // あとで使うnewContentを空にしておく
  guessTimes++; // guessTimes(解答回数)を一回のkeypressごとに増加する
  var timeout = setTimeout(function() {
    // 解答(output1)の表示する時間1.5秒
    outputDOM.innerText = "";
  }, 1500);

  if (guess < randomNum) {
    // もしguessが答えより低い場合
    // newContent に入れるための dom エレメントを作成
    newContent = "<h1>Too Low!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess > randomNum) {
    // もしguessが答えより低い場合
    // newContent に入れるための dom エレメントを作成
    newContent = "<h1>Too High!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess == randomNum) {
    // newContent に入れるための dom エレメントを作成
    newContent = "<h1>That's Right</h1>";
    guessTimes = 0; // guessTimesを　0 に戻す
  }

  // 生成されたnewContent を output1 に入れ、index.htmlに表示する
  outputDOM.innerHTML = newContent;

  // input1 を空にする
  inputDOM.value = "";
}
