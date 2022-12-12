import { GameBoard } from "./gameBoard";
import { Ship } from "./ship";

describe("Gameboard ship length two - horizontal and vertical placement", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  gameBoard.horizontal(ship, 0, 0);
  const ship2 = new Ship(2);
  gameBoard.vertical(ship2, 0, 0);

  test("Places a ship of length 2 horizontally at 0,0", () => {
    expect(ship.coords[0]).toEqual(expect.arrayContaining([0, 0]));
  });

  test("Places a ship of length 2 horizontally at 0,0", () => {
    expect(ship.coords[1]).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Places ship of length 2 vertically at 0,0", () => {
    expect(ship2.coords[0]).toEqual(expect.arrayContaining([0, 0]));
  });

  test("Places ship of length 2 vertically at 0,0", () => {
    expect(ship2.coords[1]).toEqual(expect.arrayContaining([1, 0]));
  });
});

describe("Gameboard can receive attacks", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  ship.coords = [
    [0, 1],
    [0, 2],
  ];
  gameBoard.receiveAttack(ship, [0, 1]);

  test("If a ship is hit, sends hit function", () => {
    expect(ship.hit).toHaveBeenCalled();
  });

  test("If a ship is not hit, records coordinates of missed shot", () => {
    expect();
  });
});
