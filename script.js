const cellules = document.querySelectorAll(".cellule");
const winnerData = document.getElementById("winner");
let winner = "";

const tour = document.querySelector(".turn");
let currentPion = "";

//on crée un évenement click sur chaque cellule
cellules.forEach((cellule) => {
  cellule.addEventListener("click", (e) => {
    const span = document.createElement("span");
    e.target.appendChild(span);
    if (
      e.target.firstChild.textContent === "" &&
      !checkWinnerHorizontally(cellules) &&
      !checkWinnerVertically(cellules) &&
      !checkWinnerDiagonally(cellules)
    ) {
      currentPion = currentPion === "X" ? "O" : "X";
      span.textContent = currentPion;
      currentPion === "X"
        ? span.classList.add("green")
        : span.classList.add("red");
    }
    tour.textContent = `c'est au tour du  ${
      currentPion === "X" ? "joueur 2" : "joueur 1"
    }`;
    checkWinner();
    CheckMatchNull();
  });
});

//fonction  qui vérifie  toutes les possibilités de victoires
function checkWinner() {
  if (checkWinnerHorizontally(cellules)) {
    winnerData.textContent = checkWinnerHorizontally(cellules);
    tour.textContent = "";
  } else if (checkWinnerVertically(cellules)) {
    winnerData.textContent = checkWinnerVertically(cellules);
    tour.textContent = "";
  } else if (checkWinnerDiagonally(cellules)) {
    winnerData.textContent = checkWinnerDiagonally(cellules);
    tour.textContent = "";
  }
}

//fonction qui vérifie si un joueur a gagné horizontalement
function checkWinnerHorizontally(data) {
  if (
    (data[0]?.firstElementChild?.textContent === "X" &&
      data[1]?.firstElementChild?.textContent === "X" &&
      data[2]?.firstElementChild?.textContent === "X") ||
    (data[0]?.firstElementChild?.textContent === "O" &&
      data[1]?.firstElementChild?.textContent === "O" &&
      data[2]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[0]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }

  if (
    (data[3]?.firstElementChild?.textContent === "X" &&
      data[4]?.firstElementChild?.textContent === "X" &&
      data[5]?.firstElementChild?.textContent === "X") ||
    (data[3]?.firstElementChild?.textContent === "O" &&
      data[4]?.firstElementChild?.textContent === "O" &&
      data[5]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[3]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }

  if (
    (data[6]?.firstElementChild?.textContent === "X" &&
      data[7]?.firstElementChild?.textContent === "X" &&
      data[8]?.firstElementChild?.textContent === "X") ||
    (data[6]?.firstElementChild?.textContent === "O" &&
      data[7]?.firstElementChild?.textContent === "O" &&
      data[8]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[6]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }

  return winner;
}

//fonction qui vérifie si un joueur a gagné verticalement
function checkWinnerVertically(data) {
  if (
    (data[0]?.firstElementChild?.textContent === "X" &&
      data[3]?.firstElementChild?.textContent === "X" &&
      data[6]?.firstElementChild?.textContent === "X") ||
    (data[0]?.firstElementChild?.textContent === "O" &&
      data[3]?.firstElementChild?.textContent === "O" &&
      data[6]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[0]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }
  if (
    (data[1]?.firstElementChild?.textContent === "X" &&
      data[4]?.firstElementChild?.textContent === "X" &&
      data[7]?.firstElementChild?.textContent === "X") ||
    (data[1]?.firstElementChild?.textContent === "O" &&
      data[4]?.firstElementChild?.textContent === "O" &&
      data[7]?.firstElementChild?.textContent === "O")
  ) {
  winner = `le joueur ${
      data[1]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }

  if (
    (data[2]?.firstElementChild?.textContent === "X" &&
      data[5]?.firstElementChild?.textContent === "X" &&
      data[8]?.firstElementChild?.textContent === "X") ||
    (data[2]?.firstElementChild?.textContent === "O" &&
      data[5]?.firstElementChild?.textContent === "O" &&
      data[8]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[2]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }
  return winner;
}

//fonction qui vérifie si un joueur a gagné diagonalement
function checkWinnerDiagonally(data) {
  if (
    (data[0]?.firstElementChild?.textContent === "X" &&
      data[4]?.firstElementChild?.textContent === "X" &&
      data[8]?.firstElementChild?.textContent === "X") ||
    (data[0]?.firstElementChild?.textContent === "O" &&
      data[4]?.firstElementChild?.textContent === "O" &&
      data[8]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[0]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }
  if (
    (data[2]?.firstElementChild?.textContent === "X" &&
      data[4]?.firstElementChild?.textContent === "X" &&
      data[6]?.firstElementChild?.textContent === "X") ||
    (data[2]?.firstElementChild?.textContent === "O" &&
      data[4]?.firstElementChild?.textContent === "O" &&
      data[6]?.firstElementChild?.textContent === "O")
  ) {
    winner = `le joueur ${
      data[2]?.firstElementChild?.textContent === "X" ? "X" : "O"
    } a gagné`;
  }
  return winner;
}

//fonction qui vérifie si il y a un match nul
function CheckMatchNull() {
  let counter = checkIsAllClicked(cellules);
  if (
    counter === 9 &&
    !checkWinnerHorizontally(cellules) &&
    !checkWinnerVertically(cellules) &&
    !checkWinnerDiagonally(cellules)
  ) {
    winnerData.textContent = `Match nul`;
  }
}

//fonction qui vérifie si toutes les cellules sont cliquées
function checkIsAllClicked(data) {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i]?.firstElementChild?.textContent !== "" &&
      data[i]?.firstElementChild?.textContent !== undefined
    ) {
      counter++;
    }
  }
  return counter;
}
