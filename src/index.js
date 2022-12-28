import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const gb = GameBoard();
const player = Player();
const ship = Ship();
ship.coords.push([0, 1]);
gb.getPotentialMoves();
let moves = gb.potentialMoves;
console.log(gb.potentialMoves.length);
gb.receiveAttack(ship, [0, 1]);
console.log(gb.potentialMoves.length);
