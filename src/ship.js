const Ship = function (length) {
  const shipLength = length;
  let numberOfHits = 0;
  let sunk = false;
  let coords = [];

  const hit = function () {
    numberOfHits += 1;
  };

  const isSunk = function () {
    console.log("called");
    console.log(length);
    console.log(numberOfHits);
    if (length == numberOfHits) {
      sunk = true;
      console.log("true");

      alert(sunk);
      return sunk;
    } else {
      console.log("false");
      sunk = false;
      return sunk;
    }
  };

  return { shipLength, numberOfHits, isSunk, hit, coords, length };
};

export { Ship };
