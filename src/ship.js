const Ship = function (length) {
  const shipLength = length;
  let numberOfHits = 0;
  let sunk = false;
  let coords = [];

  const hit = function () {
    this.numberOfHits += 1;
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

  return { shipLength, numberOfHits, isSunk, hit, coords };
};

export { Ship };
