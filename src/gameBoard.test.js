import { GameBoard } from "./gameBoard";
import { Ship } from "./ship";

describe("Gameboard ship length one", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(1);
  gameBoard.placeShipHorizontally(ship, 0);

  test("Places a ship of length 1 horizontally at 0,0", () => {
    expect(ship.coords[0]).toEqual(expect.arrayContaining([0, 0]));
  });
});

describe("Gameboard ship length two", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  gameBoard.placeShipHorizontally(ship, 0);

  test("Places a ship of length 2 horizontally at 0,0", () => {
    expect(ship.coords[0]).toEqual(expect.arrayContaining([0, 0]));
    expect(ship.coords[1]).toEqual(expect.arrayContaining([0, 1]));
  });
});

describe("Check gameboard board changes", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  ship.coords = [
    [0, 1],
    [0, 2],
  ];
  gameBoard.moveGameboardShip(ship);

  test("Places a ship of length 2 horizontally at 0,0", () => {
    expect(ship.coords[0]).toEqual(expect.arrayContaining([0, 0]));
    expect(ship.coords[1]).toEqual(expect.arrayContaining([0, 1]));
  });
});
