const squares = document.querySelectorAll(".grid > div");
const resultDisplay = document.querySelector("#result");
const currentPlayerDisplay = document.querySelector("#current-player");

let currentPlayer = 1;
for (let i = 0; i < squares.length; i++) {
  const square = squares[i];
  square.addEventListener("click", () => {
    // alert("You clicked " + i);
    if (
      squares[i + 7].classList.contains("taken") &&
      !squares[i].classList.contains("taken")
    ) {
      if (currentPlayer == 1) {
        squares[i].classList.add("taken");
        squares[i].classList.add("playerOne");
        currentPlayer = 2;
        currentPlayerDisplay.innerHTML = currentPlayer;
      } else if (currentPlayer == 2) {
        squares[i].classList.add("taken");
        squares[i].classList.add("playerTwo");
        currentPlayer = 1;
        currentPlayerDisplay.innerHTML = currentPlayer;
      }
    } else {
      alert("Can't place your token here");
    }

    checkBoard();
  });
}

function checkBoard() {
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    switch (checkToken(i)) {
      case 1:
        resultDisplay.innerHTML = "Player one wins!";
        break;

      case 2:
        resultDisplay.innerHTML = "Player two wins!";
        break;

      default:
        break;
    }
  }
}

function checkToken(index) {
  let victory = true;

  // checking for player one
  for (let i = 0; i < 4; i++) {
    if (index + i < squares.length) {
      if (!squares[index + i].classList.contains("playerOne")) {
        victory = false;
      }
    }
  }
  if (victory) {
    return 1;
  }
  victory = true;

  for (let i = 0; i < 4; i++) {
    if (index + i * 7 < squares.length) {
      if (!squares[index + i * 7].classList.contains("playerOne")) {
        victory = false;
      }
    }
  }
  if (victory) {
    return 1;
  }

  victory = true;
  // checking for player two
  for (let i = 0; i < 4; i++) {
    if (index + i < squares.length) {
      if (!squares[index + i].classList.contains("playerTwo")) {
        victory = false;
      }
    }
  }
  if (victory) {
    return 2;
  }
  victory = true;

  for (let i = 0; i < 4; i++) {
    if (index + i * 7 < squares.length) {
      if (!squares[index + i * 7].classList.contains("playerTwo")) {
        victory = false;
      }
    }
  }
  if (victory) {
    return 2;
  }

  return false;
}
