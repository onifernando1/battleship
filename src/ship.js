const Ship = function (length) {
  const shipLength = length;
  let numberOfHits = 0;
  let sunk = false;
  let coords = [];

  const hit = function () {
    numberOfHits += 1;
  };

  const isSunk = function () {
    console.log(length);
    console.log(numberOfHits);

    if (numberOfHits >= length) {
      sunk = true;
      console.log(`ship.sunk in original ${sunk}`);
      return true;
    } else {
      console.log("false");
    }
  };

  return { shipLength, numberOfHits, isSunk, hit, coords, length, sunk };
};

export { Ship };
