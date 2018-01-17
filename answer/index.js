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

// write function to write to output dom
function getInput() {
  console.log(inputDOM.value);
  const newContent = "<h1>" + inputDOM.value + "</h1>";
  outputDOM.innerHTML += newContent;
  inputDOM.value = "";
  onkeypress();
}

// listen for key press events
document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    console.log(event);
    onkeypress();
  }
});

function onkeypress() {
  var guess = inputDOM.value;
  var newContent = "";
  guessTimes++;
  if (guess < randomNum) {
    newContent = "<h1>Too Low!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess > randomNum) {
    newContent = "<h1>Too High!!</h1>" + "<h2>You guessed: " + guessTimes + " times!</h2>";
  } else if (guess == randomNum) {
    newContent = "<h1>That's Right</h1>";
    guessTimes = 0;
  }

  outputDOM.innerHTML = newContent;
  var timeout = setTimeout(() => (outputDOM.innerText = ""), 1500);
  inputDOM.value = "";
}
