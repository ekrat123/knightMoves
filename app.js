function getMoves(arr) {
  const [x, y] = arr;
  const moves = [
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x + 1, y + 2],
  ];

  return moves.filter(
    (move) => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
  );
}

function knightMoves(start, end) {
  const madedmoves = [];
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    let currentObj = {
      move: current,
      distance:
        madedmoves.length === 0
          ? 0
          : madedmoves[madedmoves.length - 1].distance + 1,
      pre: madedmoves.length === 0 ? null : madedmoves.length - 1,
    };
    madedmoves.push(currentObj);
    if (current[0] === end[0] && current[1] === end[1]) {
      break;
    }

    const nextMoves = getMoves(current);
    let nextMovesCount = (nextMovesCount = 0 ? queue.length : nextMovesCount);

    queue = queue.concat(nextMoves);
  }
  return madedmoves;
}

console.log(knightMoves([3, 3], [5, 4]));
