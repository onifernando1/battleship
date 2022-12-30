import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

const Game = function () {
  let playerOne = "";
  let playerTwo = "";
  let currentPlayer = playerOne;
  let p1Gameboard = GameBoard();
  let p2Gameboard = GameBoard();

  const swapPlayer = function () {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  };

  const setUpGame = function () {
    playerOne = Player();
    // p1Gameboard = GameBoard();
    const p1ship2 = Ship(2);
    p1ship2.coords.push([0, 0]);
    p1ship2.coords.push([0, 1]);
    p1Gameboard.board[0][0] = p1ship2;
    p1Gameboard.board[0][1] = p1ship2;
    const p1ship3a = Ship(3);
    console.log(`abc${p1ship3a.length}`);

    p1ship3a.coords.push([1, 0]);
    p1ship3a.coords.push([1, 1]);
    p1ship3a.coords.push([1, 2]);
    p1Gameboard.board[1][0] = p1ship3a;
    p1Gameboard.board[1][1] = p1ship3a;
    p1Gameboard.board[1][2] = p1ship3a;
    const p1ship3b = Ship(3);
    p1ship3b.coords.push([2, 0]);
    p1ship3b.coords.push([2, 1]);
    p1ship3b.coords.push([2, 2]);
    p1Gameboard.board[2][0] = p1ship3b;
    p1Gameboard.board[2][1] = p1ship3b;
    p1Gameboard.board[2][2] = p1ship3b;
    const p1ship4 = Ship(4);
    p1ship4.coords.push([3, 0]);
    p1ship4.coords.push([3, 1]);
    p1ship4.coords.push([3, 2]);
    p1ship4.coords.push([3, 3]);
    p1Gameboard.board[3][0] = p1ship4;
    p1Gameboard.board[3][1] = p1ship4;
    p1Gameboard.board[3][2] = p1ship4;
    p1Gameboard.board[3][3] = p1ship4;
    const p1ship5 = Ship(5);
    p1ship5.coords.push([4, 0]);
    p1ship5.coords.push([4, 1]);
    p1ship5.coords.push([4, 2]);
    p1ship5.coords.push([4, 3]);
    p1ship5.coords.push([4, 4]);
    p1Gameboard.board[4][0] = p1ship5;
    p1Gameboard.board[4][1] = p1ship5;
    p1Gameboard.board[4][2] = p1ship5;
    p1Gameboard.board[4][3] = p1ship5;
    p1Gameboard.board[4][4] = p1ship5;
    p1Gameboard.currentShips.push(p1ship2);
    p1Gameboard.currentShips.push(p1ship3a);
    p1Gameboard.currentShips.push(p1ship3b);
    p1Gameboard.currentShips.push(p1ship4);
    p1Gameboard.currentShips.push(p1ship5);

    playerTwo = Player();
    // p2Gameboard = GameBoard();
    const p2ship2 = Ship(2);
    p2ship2.coords.push([0, 0]);
    p2ship2.coords.push([0, 1]);
    p2Gameboard.board[0][0] = p2ship2;
    p2Gameboard.board[0][1] = p2ship2;
    const p2ship3a = Ship(3);
    p2ship3a.coords.push([1, 0]);
    p2ship3a.coords.push([1, 1]);
    p2ship3a.coords.push([1, 2]);
    p2Gameboard.board[1][0] = p2ship3a;
    p2Gameboard.board[1][1] = p2ship3a;
    p2Gameboard.board[1][2] = p2ship3a;
    const p2ship3b = Ship(3);
    p2ship3b.coords.push([2, 0]);
    p2ship3b.coords.push([2, 1]);
    p2ship3b.coords.push([2, 2]);
    p2Gameboard.board[2][0] = p2ship3b;
    p2Gameboard.board[2][1] = p2ship3b;
    p2Gameboard.board[2][2] = p2ship3b;
    const p2ship4 = Ship(4);
    p2ship4.coords.push([3, 0]);
    p2ship4.coords.push([3, 1]);
    p2ship4.coords.push([3, 2]);
    p2ship4.coords.push([3, 3]);
    p2Gameboard.board[3][0] = p2ship4;
    p2Gameboard.board[3][1] = p2ship4;
    p2Gameboard.board[3][2] = p2ship4;
    p2Gameboard.board[3][3] = p2ship4;
    const p2ship5 = Ship(5);
    p2ship5.coords.push([4, 0]);
    p2ship5.coords.push([4, 1]);
    p2ship5.coords.push([4, 2]);
    p2ship5.coords.push([4, 3]);
    p2ship5.coords.push([4, 4]);
    p2Gameboard.board[4][0] = p2ship5;
    p2Gameboard.board[4][1] = p2ship5;
    p2Gameboard.board[4][2] = p2ship5;
    p2Gameboard.board[4][3] = p2ship5;
    p2Gameboard.board[4][4] = p2ship5;

    p2Gameboard.currentShips.push(p2ship2);
    p2Gameboard.currentShips.push(p2ship3a);
    p2Gameboard.currentShips.push(p2ship3b);
    p2Gameboard.currentShips.push(p2ship4);
    p2Gameboard.currentShips.push(p2ship5);
  };

  return { swapPlayer, setUpGame, p1Gameboard, p2Gameboard };
};

export { Game };
