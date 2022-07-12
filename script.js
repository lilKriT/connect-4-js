const squares = document.querySelectorAll(".grid > div");
const resultDisplay = document.querySelector("#result");
const currentPlayerDisplay = document.querySelector("#current-player");

let currentPlayer = 1;
for (let i = 0; i < squares.length; i++) {
  const square = squares[i];
  square.addEventListener("click", () => {
    // alert("You clicked " + i);
    if (squares[i + 7].classList.contains("taken")) {
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
  });
}
