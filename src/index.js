import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const gb = GameBoard();
const player = Player();
gb.getPotentialMoves();
let moves = gb.potentialMoves;

const matchMove = function (arrayToFindMatch, coords) {
  arrayToFindMatch.forEach((move) => {
    if (move[0] == coords[0] && move[1] == coords[1]) {
      console.log("match");
    }
  });
};

console.log(moves[1][0] == 1);
console.log("HI");

// player.randomAttack(gb);
