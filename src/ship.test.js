import { Ship } from "./ship";

describe("Ship", () => {
  const ship = new Ship();

  test("Hit increases ship hits by one", () => {
    ship.hit();
    expect(ship.numberOfHits).toBe(1);
  });

  test("Hit increases ship hits by two", () => {
    ship.hit();
    expect(ship.numberOfHits).toBe(2);
  });

  test("Ship sinks when hits = length", () => {
    expect(ship.isSunk(3, 3)).toBe(true);
  });

  test("Ship doesn't when hits!= length", () => {
    expect(ship.isSunk(3, 4)).toBe(false);
  });
});
