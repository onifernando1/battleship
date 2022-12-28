const Game = function () {
  const playerOne = "";
  const playerTwo = "";
  const currentPlayer = playerOne;

  const swapPlayer = function () {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  };

  return { swapPlayer };
};

export { Game };
