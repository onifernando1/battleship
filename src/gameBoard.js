//check for legal moves

const GameBoard = function () {
  let shipPlacementMode = "horizontal";
  let currentShips = [];
  let sunkShips = [];
  const missedCoords = [];
  let potentialMoves = [];

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

  const setUpClickToHit = function () {
    let squares = document.getElementsByClassName("individual-square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        console.log("HI");
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

  const checkNestedArray = function (array, coords) {
    let match = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(coords[0]) && array[i].includes(coords[1])) {
        match = true;
      }
    }
    return match;
  };

  const matchMove = function (arrayToFindMatch, coords) {
    let match = false;
    arrayToFindMatch.forEach((move) => {
      if (move[0] == coords[0] && move[1] == coords[1]) {
        console.log("true");
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

  const receiveAttack = function (ship, coords) {
    if (matchMove(ship.coords, coords)) {
      ship.hit();
      console.log("hit");
    } else {
      missedCoords.push(coords);
    }

    if (matchMove(potentialMoves, coords)) {
      removeAllInstances(potentialMoves, coords); // need to code this
    }
  };

  const allSunk = function () {
    let allShipsSunk = [];
    currentShips.forEach((ship) => {
      if (ship.sunk == false) {
        allShipsSunk.push(false);
      } else {
        allShipsSunk.push(true);
      }
    });

    if (allShipsSunk.includes(false)) {
      return false;
    } else {
      return true;
    }
  };

  const drawBoard = function () {
    console.log("Hi");
    const container = document.getElementsByClassName("container")[0];
    console.log(container);
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    container.appendChild(boardContainer);
    board.forEach((board) => {
      board.forEach((innerSquare) => {
        let individualSquare = document.createElement("div");
        individualSquare.classList.add("individual-square");
        boardContainer.appendChild(individualSquare);
        if (innerSquare[0] != " ") {
          console.log("yes");
          individualSquare.classList.add("ship");
        }
      });
    });
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
  };
};

export { GameBoard };
