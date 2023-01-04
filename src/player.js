import { GameBoard } from "./gameBoard";

const Player = function () {
  const name = "";
  let legalMoves = [];
  // let previousMoves = [];
  // let availableMoves = [];

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
      if (
        coords[0] == opponentGameboardMissedCoordsArray[i][0] &&
        coords[1] == opponentGameboardMissedCoordsArray[i][1]
      ) {
        match = true;
      } else {
        availableMoves.push([coords[0], coords[1]]);
      }
    }

    if (match == true) {
      return true;
    } else {
      return false;
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomAttack = function (opponentGameboard) {
    console.log("random attack");
    let randomIndex = getRandomInt(opponentGameboard.potentialMoves.length - 1);
    let randomMove = opponentGameboard.potentialMoves[randomIndex];
    return randomMove;
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
