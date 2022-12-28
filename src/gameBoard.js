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
    arrayToFindMatch.forEach((move) => {
      if (move[0] == coords[0] && move[1] == coords[1]) {
        return true;
      } else {
        return false;
      }
    });
  };

  const receiveAttack = function (ship, coords) {
    if (checkNestedArray(ship.coords, coords)) {
      ship.hit();
    } else {
      missedCoords.push(coords);
    }

    if (matchMove(potentialMoves, coords)) {
      potentialMoves.remove(coords); // need to code this
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
  };
};

export { GameBoard };
