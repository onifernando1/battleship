const Ship = function (length) {
  const shipLength = length;
  let numberOfHits = 0;
  let sunk = false;
  let coords = [];

  const hit = function () {
    numberOfHits += 1;
  };

  const isSunk = function () {
    if (numberOfHits >= length) {
      sunk = true;
      return true;
    } else {
      return false;
    }
  };

  return { shipLength, numberOfHits, isSunk, hit, coords, length, sunk };
};

export { Ship };
