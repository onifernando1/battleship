import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const gb = GameBoard();
const player = Player();

let marray = [
  [0, 1],
  [0, 0],
];

console.log(player.checkMissedCoordsForMatch([0, 0], marray));
