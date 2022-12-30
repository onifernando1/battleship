import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";
import { Game } from "./game";

// const gb1 = GameBoard();
// const gb2 = GameBoard();

// // const game = Game();
// // const player = Player();
// // const ship = Ship();
// // ship.coords.push([0, 1]);
// // gb.getPotentialMoves();
// // let moves = gb.potentialMoves;
// // console.log(gb.potentialMoves.length);
// // gb.receiveAttack(ship, [0, 3]);
// // console.log(gb.potentialMoves.length);
// gb1.drawBoard();
// gb2.drawBoard();
const game = Game();
game.setUpGame();
game.p1Gameboard.drawBoard();
game.p2Gameboard.drawBoard();
game.p1Gameboard.setUpClickToHit();
game.p2Gameboard.setUpClickToHit();
