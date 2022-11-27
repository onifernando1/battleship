import { Ship } from "./ship";

const ship = Ship(5);
const placeShip = function (ship, startRowCoords) {
  for (let i = 0; i < ship.shipLength; i++) {
    console.log(i);
    let currentCoord = [startRowCoords, i];
    ship.coords.push(currentCoord);
    console.log(currentCoord);
  }
};

placeShip(ship, 0);
