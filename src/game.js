import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

// need to change ids on each gameboard
// add in swaps
// dont allow attacking own gameboard
// make computer make move on its go
//set timeout to delay move
// display change
// end at win

const Game = function () {
  let playerOne = Player();
  playerOne.name = "playerOne";
  let playerTwo = Player();
  playerTwo.name = "playerTwo";
  let p1Gameboard = GameBoard(playerOne, playerTwo);
  let p2Gameboard = GameBoard(playerOne, playerTwo);
  p1Gameboard.getPotentialMoves();
  p2Gameboard.getPotentialMoves();
  let win = false;
  let currentPlayer = playerOne;

  const setUpPlayerOneShips = function () {
    // p1Gameboard = GameBoard();
    const p1ship2 = Ship(2);
    p1ship2.coords.push([0, 0]);
    p1ship2.coords.push([0, 1]);
    p1Gameboard.board[0][0] = p1ship2;
    p1Gameboard.board[0][1] = p1ship2;
    const p1ship3a = Ship(3);
    // console.log(`abc${p1ship3a.length}`);

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
  };

  const setUpPlayerTwoShips = function () {
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

  const receiveAttack = function (coords, square, board, potentialMoves) {
    let ship = board[coords[1]][coords[0]]; // x and y must be swapped for game board

    // if not a legal move, retry
    console.log(`coords = ${coords}`);
    if (matchMove(potentialMoves, coords) == false) {
      console.log("Retry bro");
    } else {
      if (ship == " ") {
        if (currentPlayer == playerOne) {
          p2Gameboard.missedCoords.push(coords);
        } else {
          p1Gameboard.missedCoords.push(coords);
        }
        console.log("miss");
        displayMiss(square);
        swapPlayer();
      } else {
        let swappedCoords = [];
        swappedCoords.push(coords[1]);
        swappedCoords.push(coords[0]);
        if (matchMove(ship.coords, swappedCoords)) {
          ship.hit();
          displayHit(square);
          ship.isSunk();
          if (ship.isSunk()) {
            shipSunk(ship);
            if (currentPlayer == playerOne) {
              p2Gameboard.sunkShips.push(ship);
            } else {
              p1Gameboard.sunkShips.push(ship);
            }
          }
          console.log("hit");
          swappedCoords = [];
          swapPlayer(); // swap
        }
      }
      if (matchMove(potentialMoves, coords)) {
        removeAllInstances(potentialMoves, coords); // need to code this
      }
    }
  };

  function removeAllInstances(arr, item) {
    for (let i = arr.length; i--; ) {
      if (arr[i][0] == item[0] && arr[i][1] == item[1]) arr.splice(i, 1);
    }
  }

  const shipSunk = function (ship) {
    for (let i = 0; i < ship.coords.length; i++) {
      let x = ship.coords[i][1];
      let y = ship.coords[i][0];
      let square = coordsToSquare([x, y]);
      square.classList.add("sunk");
    }
  };

  const coordsToSquare = function (coords) {
    let coX = coords[0];
    let coY = coords[1];
    let squares = "";
    if (currentPlayer == playerTwo) {
      squares = document.getElementsByClassName("individual-square");
    } else {
      squares = document.getElementsByClassName("computer-square");
    }
    for (let i = 0; i < squares.length; i++) {
      let randomAttackCoords = classToCoords(squares[i]);
      if (coX == randomAttackCoords[0] && coY == randomAttackCoords[1]) {
        let squareToAttack = squares[i];
        console.log(squareToAttack);
        return squareToAttack;
      }
    }
  };

  const matchMove = function (arrayToFindMatch, coords) {
    let match = false;
    arrayToFindMatch.forEach((move) => {
      if (move[0] == coords[0] && move[1] == coords[1]) {
        // console.log("true");
        match = true;
      }
    });

    if (match == true) {
      return true;
    } else {
      return false;
    }
  };

  const setUpClickToHit = function () {
    let squares = document.getElementsByClassName("computer-square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        receiveAttack(
          classToCoords(squares[i]),
          squares[i],
          p2Gameboard.board,
          p2Gameboard.potentialMoves
        );
      });
    }
  };

  const displayHit = function (square) {
    square.classList.add("hit");
  };

  const displayMiss = function (square) {
    square.classList.add("miss");
  };

  const disableClick = function () {
    let squares = document.getElementsByClassName("computer-square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add("disabled");
    }
  };

  const enableClick = function () {
    let squares = document.getElementsByClassName("computer-square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.remove("disabled");
    }
  };

  const allSunk = function () {
    if (
      p1Gameboard.sunkShips.length == 5 ||
      p2Gameboard.sunkShips.length == 5
    ) {
      alert("DONE!");
      return true;
    } else {
      return false;
    }
  };

  const swapPlayer = function () {
    allSunk();
    if (currentPlayer == playerOne) {
      disableClick();
      currentPlayer = playerTwo;
      let randomCoords = currentPlayer.randomAttack(p1Gameboard);
      let square = coordsToSquare(randomCoords);

      receiveAttack(
        randomCoords,
        square,
        p1Gameboard.board,
        p1Gameboard.potentialMoves
      );
    } else {
      enableClick();
      currentPlayer = playerOne;
    }
    console.log("swap");
    console.log(currentPlayer);
  };

  const classToCoords = function (individualSquare) {
    let classes = individualSquare.classList;
    let x = classes[1];
    let y = "oops"; // to stop errors
    let temp = parseInt(classes[2]);
    if (parseInt(classes[2]) >= 0) {
      y = classes[2];
    } else {
      y = classes[1];
    }
    return [x, y];
  };

  const setUpGame = function () {
    setUpPlayerOneShips();
    setUpPlayerTwoShips();
    p1Gameboard.drawBoard();
    p2Gameboard.drawComputerBoard();
    setUpClickToHit();
  };

  return { setUpGame, p1Gameboard, p2Gameboard };
};

export { Game };
