const GameBoard = function () {
  const createBoard = function () {
    let x = new Array(10);
    for (let i = 0; i < x.length; i++) {
      x[i] = new Array(10);
    }
    return x;
  };

  let board = createBoard();

  const placeShip = function (ship, startRowCoords) {
    for (let i = 0; i < ship.shipLength; i++) {
      let currentCoord = [startRowCoords, i];
      ship.coords.push(currentCoord);
    }
  };

  return { board, placeShip };
};

export { GameBoard };
