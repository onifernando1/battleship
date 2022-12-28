import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";
import { Game } from "./game";

const gb = GameBoard();
const game = Game();
game.say();
const player = Player();
const ship = Ship();
ship.coords.push([0, 1]);
gb.getPotentialMoves();
let moves = gb.potentialMoves;
console.log(gb.potentialMoves.length);
gb.receiveAttack(ship, [0, 3]);
console.log(gb.potentialMoves.length);
