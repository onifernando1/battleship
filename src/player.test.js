import { GameBoard } from "./gameBoard";
import { Ship } from "./ship";
import { Player } from "./player";

// describe("Random attack", () => {
//   const player = Player();
//   const gb = GameBoard();
//   //   let attack = player.randomAttack(gb);

//   test("Gives a random coord x less than 10", () => {
//     expect(player.randomAttack(gb)[0]).toBeLessThanOrEqual(10);
//   });

//   test("Gives a random coord y less than 10", () => {
//     expect(player.randomAttack(gb)[1]).toBeLessThanOrEqual(10);
//   });
// });

// describe("Random attack doesn't include filled square", () => {
//   const player = Player();
//   const gb = GameBoard();
//   for (let i = 0; i < 9; i++) {
//     for (let a = 0; a < 9; a++) {
//       gb.missedCoords.push([a, i]);
//     }
//   }

//   test("Random coord not given if taken by a ship", () => {
//     expect(player.randomAttack(gb)[0]).toBe(9);
//   });
// });

describe("Checks missed coords", () => {
  const player = Player();
  let marray = [
    [0, 1],
    [0, 0],
  ];

  let gb = GameBoard();
  gb.missedCoords.push([0, 1]);

  test("If 0,0 expect match (true)", () => {
    expect(player.checkMissedCoordsForMatch([0, 0], marray)).toEqual(true);
  });

  test("If 3,0 expect no match (false)", () => {
    expect(player.checkMissedCoordsForMatch([3, 0], marray)).toEqual(false);
  });

  test("If 0,1 expect match (false) with gameboard", () => {
    expect(player.checkMissedCoordsForMatch([3, 0], gb.missedCoords)).toEqual(
      false
    );
  });
});
