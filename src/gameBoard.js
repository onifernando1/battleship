const GameBoard = function () {
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
    //if shipPlacementMode == ("horizontal")
    horizontal(ship, startRowCoords, startColumnCoords);
    //if shipPlacementMode == ("vertical")
    vertical(ship, startRowCoords, startColumnCoords);
    moveGameboardShipHorizontally(ship);
  };

  return { board, horizontal, vertical };
};

export { GameBoard };
