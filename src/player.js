import { GameBoard } from "./gameBoard";

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

  const checkMissedCoordsForMatch = function (
    coords,
    opponentGameboardMissedCoordsArray
  ) {
    let match = false;
    for (let i = 0; i < opponentGameboardMissedCoordsArray.length; i++) {
      console.log(opponentGameboardMissedCoordsArray[i][0]);
      console.log(opponentGameboardMissedCoordsArray[i][1]);
      console.log(coords[0] == opponentGameboardMissedCoordsArray[i][0]);
      console.log(coords[1] == opponentGameboardMissedCoordsArray[i][1]);

      if (
        coords[0] == opponentGameboardMissedCoordsArray[i][0] &&
        coords[1] == opponentGameboardMissedCoordsArray[i][1]
      ) {
        match = true;
      }
    }

    if (match == true) {
      console.log("IT IS A MATCH");
      return true;
    } else {
      console.log("IT IS NOT A MATCH");
      return false;
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomAttack = function (opponentGameboard) {
    let x = getRandomInt(10);
    let y = getRandomInt(10);
    console.log(opponentGameboard.missedCoords);

    let missedCoordMatch = false;
    missedCoordMatch = checkMissedCoordsForMatch(
      [x, y],
      opponentGameboard.missedCoords
    );
    console.log(`missedCoordsMatch ${missedCoordMatch}`);
    // console.log(
    //   `opponentgameboard.board[x][y] = ${opponentGameboard.board[x][y]}`
    // );
    // console.log(`missedcoordmatch = ${missedCoordMatch}`);
    // console.log(`x,y, ${(x, y)}`);

    while (missedCoordMatch == true) {
      console.log("in while");
      x = getRandomInt(9);
      y = getRandomInt(9);
      console.log(`while x y ${[x, y]}`);
      missedCoordMatch = checkMissedCoordsForMatch(
        [x, y],
        opponentGameboard.missedCoords
      );
    }
    let randomMove = [x, y];
    console.log(randomMove);

    // return randomMove;
  };
  return {
    name,
    randomAttack,
    getLegalMoves,
    randomAttack,
    checkMissedCoordsForMatch,
  };
};

export { Player };
