const Ship = function (length) {
  const shipLength = length;
  let numberOfHits = 0;
  let sunk = false;

  const hit = function () {
    numberOfHits += 1;
    return numberOfHits;
  };

  const isSunk = function (length, numberOfHits) {
    if (length == numberOfHits) {
      sunk = true;
      return sunk;
    } else {
      sunk = false;
      return sunk;
    }
  };

  return { shipLength, numberOfHits, isSunk, hit };
};

export { Ship };
