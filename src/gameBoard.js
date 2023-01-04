const GameBoard = function (playerOne, playerTwo) {
  let shipPlacementMode = "horizontal";
  let currentShips = [];
  let sunkShips = [];
  const missedCoords = [];
  let potentialMoves = [];
  let currentPlayer = playerOne;

  let board = [
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
    [[" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "]],
  ];

  const getPotentialMoves = function () {
    for (let i = 0; i < 10; i++) {
      for (let a = 0; a < 10; a++) {
        potentialMoves.push([a, i]);
      }
    }
  };

  // const setUpClickToHit = function () {
  //   let squares = document.getElementsByClassName("computer-square");
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].addEventListener("click", () => {
  //       receiveAttack(classToCoords(squares[i]), squares[i]);
  //     });
  //   }
  // };

  // const disableClick = function () {
  //   let squares = document.getElementsByClassName("computer-square");
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].classList.add("disabled");
  //   }
  // };

  // const enableClick = function () {
  //   let squares = document.getElementsByClassName("computer-square");
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].classList.remove("disabled");
  //   }
  // };

  const horizontal = function (ship, startRowCoords, startColumnCoords) {
    for (let i = 0; i < ship.shipLength; i++) {
      let currentCoord = [startRowCoords, i + startColumnCoords];
      ship.coords.push(currentCoord);
    }
  };

  const vertical = function (ship, startRowCoords, startColumnCoords) {
    for (let i = 0; i < ship.shipLength; i++) {
      let currentCoord = [i + startRowCoords, startColumnCoords];
      ship.coords.push(currentCoord);
    }
  };

  const placeShip = function (ship) {
    ship.coords.forEach((coord) => {
      let outer = coord[0];
      let inner = coord[1];
      board[outer][inner] = ship;
    });
  };

  const setShipPosition = function (ship, startRowCoords, startColumnCoords) {
    if (shipPlacementMode == "horizontal") {
      horizontal(ship, startRowCoords, startColumnCoords);
    } else if (shipPlacementMode == "vertical") {
      vertical(ship, startRowCoords, startColumnCoords);
    }
  };

  const shipSunk = function (ship) {
    for (let i = 0; i < ship.coords.length; i++) {
      let x = ship.coords[i][0];
      let y = ship.coords[i][1];
    }
  };

  const allSunk = function () {
    if (sunkShips.length == 5) {
      alert("DONE!");
      return true;
    } else {
      return false;
    }
  };

  const drawBoard = function () {
    const container = document.getElementsByClassName("container")[0];
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    container.appendChild(boardContainer);
    for (let i = 0; i < board.length; i++) {
      for (let a = 0; a < board.length; a++) {
        let individualSquare = document.createElement("div");
        individualSquare.classList.add("individual-square");
        individualSquare.classList.add(a); // x
        individualSquare.classList.add(i); // y
        boardContainer.appendChild(individualSquare);
        if (board[i][a] != " ") {
          individualSquare.classList.add("ship");
        }
      }
    }
  };

  const drawComputerBoard = function () {
    const container = document.getElementsByClassName("container")[0];
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    container.appendChild(boardContainer);
    for (let i = 0; i < board.length; i++) {
      for (let a = 0; a < board.length; a++) {
        let individualSquare = document.createElement("div");
        individualSquare.classList.add("computer-square");
        individualSquare.classList.add(a); // x
        individualSquare.classList.add(i); // y
        boardContainer.appendChild(individualSquare);
      }
    }
  };

  return {
    board,
    horizontal,
    vertical,
    missedCoords,
    currentShips,
    allSunk,
    getPotentialMoves,
    potentialMoves,
    drawBoard,
    drawComputerBoard,
    sunkShips,
  };
};

export { GameBoard };

// const checkNestedArray = function (array, coords) {
//   let match = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].includes(coords[0]) && array[i].includes(coords[1])) {
//       match = true;
//     }
//   }
//   return match;
// };
