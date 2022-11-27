import { Ship } from "./ship";

describe("Ship", () => {
  const ship = new Ship();

  test("Hit increases ship hits by one", () => {
    expect(ship.hit()).toBe(1);
  });

  test("Hit increases ship hits by two", () => {
    expect(ship.hit()).toBe(2);
  });

  test("Ship sinks when hits = length", () => {
    expect(ship.isSunk(3, 3)).toBe(true);
  });

  test("Ship doesn't when hits!= length", () => {
    expect(ship.isSunk(3, 4)).toBe(false);
  });
});
