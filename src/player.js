import { GameBoard } from "./gameBoard";

const Player = function () {
  const name = "";
  let legalMoves = [];
  let previousMoves = [];
  let availableMoves = [];

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
    availableMoves = [];

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
      } else {
        availableMoves.push([coords[0], coords[1]]);
      }
    }

    console.log(`available : ${availableMoves}`);

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
    let missedCoordMatch = true;

    while (missedCoordMatch == true) {
      console.log("in while");
      let x = getRandomInt(9);
      let y = getRandomInt(9);
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
