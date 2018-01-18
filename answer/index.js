var randomNum;
// set guessTimes
var guessTimes = 0;

init();

//initialize
function init() {
  setRandomNum();
}

// set Random Number to guess
function setRandomNum() {
  randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
}

// get input dom
const inputDOM = document.getElementById("input1");

// get output dom
const outputDOM = document.getElementById("output1");

// listen for key press events
document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    console.log(event);
    onkeypress();
  }
});

function onkeypress() {
  clearInterval(timeout);
  var guess = inputDOM.value;
  var newContent = "";
  guessTimes++;
  var timeout = setTimeout(function() {
    outputDOM.innerText = "";
  }, 1500);
  if (guess < randomNum) {
    newContent = "<h1>Too Low!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess > randomNum) {
    newContent = "<h1>Too High!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess == randomNum) {
    newContent = "<h1>That's Right</h1>";
    guessTimes = 0;
  }

  outputDOM.innerHTML = newContent;

  inputDOM.value = "";
}
