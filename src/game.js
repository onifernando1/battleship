import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const Game = function () {
  const playerOne = "";
  const playerTwo = "";
  const currentPlayer = playerOne;

  const swapPlayer = function () {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  };

  const setUpGame = function () {
    playerOne = Player();
    const p1Gameboard = GameBoard();
    const p1ship2 = Ship(2);
    const p1ship3a = Ship(3);
    const p1ship3b = Ship(3);
    const p1ship4 = Ship(4);
    const p1ship5 = Ship(5);

    playerTwo = Player();
    const p2Gameboard = GameBoard();
    const p2ship2 = Ship(2);
    const p2ship3a = Ship(3);
    const p2ship3b = Ship(3);
    const p2ship4 = Ship(4);
    const p2ship5 = Ship(5);
  };

  return { swapPlayer, setUpGame };
};

export { Game };
