import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const gb = GameBoard();
const player = Player();
gb.missedCoords.push([0, 1]);
player.randomAttack(gb);
