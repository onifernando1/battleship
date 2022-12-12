import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";

const shippy = Ship(1);
console.log(shippy.numberOfHits);

shippy.coords.push([0, 0]);
shippy.coords.push([0, 1]);
const gameBoard = GameBoard();
gameBoard.receiveAttack(shippy, [0, 0]);
shippy.hit();
console.log(shippy.numberOfHits);
