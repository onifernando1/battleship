import { GameBoard } from "./gameBoard";
import { Ship } from "./ship";

describe("Gameboard", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(1);
  gameBoard.placeShip(ship, 0);

  test("Places a ship of length 1 horizontally at 0,0", () => {
    expect(ship.coords[0]).toEqual(expect.arrayContaining([0, 0]));
  });
});
