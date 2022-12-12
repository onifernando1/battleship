import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";

const shippy = Ship(1);
const gameBoard = GameBoard();
shippy.sunk = false;
gameBoard.currentShips.push(shippy);
console.log(gameBoard.allSunk());
