const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.getElementById("newGameBtn");
const msgContainer = document.querySelector(".msg-continer");
const msg = document.getElementById("msg");
const main = document.getElementById("main");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;

  msgContainer.classList.add("hidden");
  main.classList.remove("hidden");
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "0";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    colorChange();
  });
});
const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  main.classList.add("hidden");
  msgContainer.classList.remove("hidden");
  disableBox();
};
const disableBox = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const colorChange = () => {
  for (const box of boxes) {
    if (box.innerText === "0") {
      box.style.color = "green";
    } else {
      box.style.color = "red";
    }
  }
};
