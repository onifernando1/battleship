import { Ship } from "./ship";

describe("Ship", () => {
  const ship = new Ship();

  test("defines setRule()", () => {
    expect(ship.sunk).toBe(false);
  });
});
console.log("");
