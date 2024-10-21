// declare number of col and row
const size = 3;
// counting the total click of the users
let countClick = 1;
// Declare the users choice as array
let user1Choice = [];
let user2Choice = [];
// pre defined the correct answers
const correctAnswers = [
  [1, 2, 3],
  [3, 6, 9],
  [9, 8, 7],
  [7, 4, 1],
  [4, 5, 6],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
];
// getting the dom of the grid
const container = document.querySelector("#sketchArea");
container.style.gridTemplateColumns = `repeat(${size},1fr)`;
container.style.gridTemplateRows = `repeat(${size},1fr)`;

const winnerDiv = document.querySelector("#result");
winnerDiv.classList.add("winner");

// define a cell
const setCell = (index) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("index", index);
  cell.addEventListener("click", (e) => {
    updateUserChoice(e);
  });
  container.appendChild(cell);
};

// attaching the cells into the grid
for (let i = 1; i <= size * size; i++) {
  setCell(i);
}

// updare the array of the userchoices
const updateUserChoice = (e) => {
  let cellIndex = parseInt(e.currentTarget.getAttribute("index"));
  if (countClick % 2 != 0) {
    e.target.textContent = "X";
    user1Choice.push(cellIndex);
  } else {
    e.target.textContent = "O";
    user2Choice.push(cellIndex);
  }
  getResult();
  countClick++;
};

// check result on every clicking on cell
const getResult = () => {
  correctAnswers.forEach((answer) => {
    checkUserChoice(user1Choice, answer) && (winner = "User X is winner");
    if (checkUserChoice(user1Choice, answer)) {
      winnerDiv.textContent = "Congratulations! The winner is X";
    } else if (checkUserChoice(user2Choice, answer)) {
      winnerDiv.textContent = "Congratulations! The winner is 0";
    } else {
      if (countClick == size * size) {
        winnerDiv.textContent = "Tie!";
      }
    }
  });
};
// compare the user choices by predefine correct answers
const checkUserChoice = (user1Choice, answer) => {
  const isCorrect = answer.every((element) => user1Choice.includes(element));
  return isCorrect;
};
