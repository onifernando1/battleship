const Player = function () {
  const name = "";
  let legalMoves = [];
  let previousMoves = [];

  const getLegalMoves = function (opponentGameboard) {
    legalMoves = [];
    for (let i = 0; i < opponentGameboard.board.length; i++) {
      for (let a = 0; a < 10; a++) {
        if (opponentGameboard.board[i][a] == " ") {
          legalMoves.push([i, a]);
        }
      }
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomAttack = function (opponentGameboard) {
    let x = getRandomInt(10);
    let y = getRandomInt(10);
    console.log(opponentGameboard.missedCoords);
    while (
      opponentGameboard.board[x][y] != " " &&
      opponentGameboard.missedCoords.includes([x, y] == false)
    ) {
      x = getRandomInt(9);
      y = getRandomInt(9);
    }
    let randomMove = [x, y];
    console.log(randomMove);

    return randomMove;
  };
  return { name, randomAttack, getLegalMoves, randomAttack };
};

export { Player };
