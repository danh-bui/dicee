// CORE LOGIC: RANDOMIZE DICES AND DISPLAY WINNER WITH BUTTON CLICKED
const diceImg1 = document.querySelectorAll(".dice--img")[0];
const diceImg2 = document.querySelectorAll(".dice--img")[1];
const h1 = document.querySelector("h1");
const btnRefresh = document.querySelector(".btn");

function randomize1To6() {return Math.floor(Math.random() * 6) + 1};
btnRefresh.onclick = function () {
  const randomNumber1 = randomize1To6();
  const randomNumber2 = randomize1To6();
  diceImg1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  diceImg2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 < randomNumber2) {
    h1.textContent = player2Name + " Wins!";
  } else if (randomNumber1 > randomNumber2) {
    h1.textContent = player1Name + " Wins!";
  } else {
    h1.textContent = "Draw!";
  }
};

// PLAY ALSO WITH KEY PRESSED
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault();
    btnRefresh.click();
  }
})

// CHANGE PLAYERS' NAMES
const player1 = prompt("Please enter player 1's name:");
const player2 = prompt("Please enter player 2's name:");
const dicePlayers = document.querySelectorAll(".dice--player");

function changePlayerName() {
  dicePlayers[0].textContent = player1;
  dicePlayers[1].textContent = player2;
};
changePlayerName();
