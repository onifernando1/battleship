const GameBoard = function () {
  const createBoard = function () {
    let x = new Array(10);
    for (let i = 0; i < x.length; i++) {
      x[i] = new Array(10);
    }
    return x;
  };

  let board = createBoard();

  const changeShipCoords = function (ship, startRowCoords) {
    for (let i = 0; i < ship.shipLength; i++) {
      let currentCoord = [startRowCoords, i];
      ship.coords.push(currentCoord);
    }
  };

  const moveGameboardShip = function (ship) {
    ship.coords.forEach((coord) => {
      let outer = coord[0];
      let inner = coord[1];
      GameBoard.board[outer][inner] = ship;
    });
  };

  const placeShipHorizontally = function (ship, startRowCoords) {
    changeShipCoords(ship, startRowCoords);
    moveGameboardShip(ship);
  };

  return { board, placeShipHorizontally };
};

export { GameBoard };
