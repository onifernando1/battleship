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

  const swapPlayer = function () {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
    console.log("swap");
    console.log(currentPlayer);
  };

  const setUpClickToHit = function () {
    let squares = document.getElementsByClassName("computer-square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        receiveAttack(classToCoords(squares[i]), squares[i]);
      });
    }
  };

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

  const matchMove = function (arrayToFindMatch, coords) {
    let match = false;
    arrayToFindMatch.forEach((move) => {
      if (move[0] == coords[0] && move[1] == coords[1]) {
        // console.log("true");
        match = true;
      }
    });

    if (match == true) {
      return true;
    } else {
      return false;
    }
  };

  function removeAllInstances(arr, item) {
    for (let i = arr.length; i--; ) {
      if (arr[i][0] == item[0] && arr[i][1] == item[1]) arr.splice(i, 1);
    }
  }

  const displayHit = function (square) {
    square.classList.add("hit");
  };

  const displayMiss = function (square) {
    square.classList.add("miss");
  };

  const shipSunk = function (ship) {
    for (let i = 0; i < ship.coords.length; i++) {
      let x = ship.coords[i][0];
      let y = ship.coords[i][1];
    }
  };

  const receiveAttack = function (coords, square) {
    let ship = board[coords[1]][coords[0]]; // x and y must be swapped for game board

    // if not a legal move, retry
    console.log(`coords = ${coords}`);
    if (matchMove(potentialMoves, coords) == false) {
      console.log("Retry bro");
    } else {
      if (ship == " ") {
        missedCoords.push(coords);
        console.log("miss");
        displayMiss(square);
        swapPlayer();
      } else {
        let swappedCoords = [];
        swappedCoords.push(coords[1]);
        swappedCoords.push(coords[0]);
        if (matchMove(ship.coords, swappedCoords)) {
          ship.hit();
          displayHit(square);
          ship.isSunk();
          swapPlayer(); // swap
          if (ship.isSunk()) {
            shipSunk(ship);
            sunkShips.push(ship);
          }
          allSunk();
          console.log("hit");
          swappedCoords = [];
        }
      }
      if (matchMove(potentialMoves, coords)) {
        removeAllInstances(potentialMoves, coords); // need to code this
      }
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

  const classToCoords = function (individualSquare) {
    let classes = individualSquare.classList;
    let x = classes[1];
    let y = "oops"; // to stop errors
    let temp = parseInt(classes[2]);
    if (parseInt(classes[2]) >= 0) {
      y = classes[2];
    } else {
      y = classes[1];
    }
    return [x, y];
  };

  return {
    board,
    horizontal,
    vertical,
    receiveAttack,
    missedCoords,
    currentShips,
    allSunk,
    getPotentialMoves,
    potentialMoves,
    matchMove,
    removeAllInstances,
    drawBoard,
    setUpClickToHit,
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
