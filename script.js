let boxes = document.querySelectorAll(".box");
let resetbutton = document.getElementById("reset");
let newGameBbutton = document.getElementById("new-game");
let result = document.getElementById("winner");
let msg = document.querySelector(".msg");
let game = document.querySelector(".game");
let container = document.querySelector(".container");
let heading = document.querySelector(".heading");

let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
  heading.classList.remove("top");
  resetbutton.classList.remove("hide");
  game.classList.remove("hide");
  container.classList.remove("hide");
  for (let box of boxes) {
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => {
  msg.classList.remove("hide");
  resetbutton.classList.add("hide");
  game.classList.add("hide");
  container.classList.add("hide");
  heading.classList.add("top");
  result.innerText = `Congratulations, Winner is ${winner}`;
  disableBoxes();
};

const checkwinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern)
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

resetbutton.addEventListener("click", resetGame);
newGameBbutton.addEventListener("click", resetGame);
