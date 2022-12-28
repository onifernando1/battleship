import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const gb = GameBoard();
const player = Player();
gb.getPotentialMoves();
let moves = gb.potentialMoves;

// const matchMove = function (arrayToFindMatch, coords) {
//   arrayToFindMatch.forEach((move) => {
//     if (move[0] == coords[0] && move[1] == coords[1]) {
//       console.log("match");
//     }
//   });
// };

// console.log(moves[1][0] == 1);
// console.log("HI");

// player.randomAttack(gb);

// let example = [];
// example.push([0, 1]);
// example.push([0, 2]);
// console.log(example);

// function removeAllInstances(arr, item) {
//   for (let i = arr.length; i--; ) {
//     if (arr[i][0] == item[0] && arr[i][1] == item[1]) arr.splice(i, 1);
//   }
// }

// removeAllInstances(example, [0, 1]);

// console.log(example);
gb.getPotentialMoves();
// console.log(player.randomAttack(gb));
console.log(gb.matchMove([1], 1));
