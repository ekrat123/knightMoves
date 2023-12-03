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
  queue.push({ move: start, distance: 0, pre: null });

  while (queue.length > 0) {
    let current = queue.shift();

    madedmoves.push(current);
    if (current.move[0] === end[0] && current.move[1] === end[1]) {
      break;
    }

    let nextMoves = getMoves(current.move);
    nextMoves = nextMoves.map((move) => {
      return {
        move: move,
        distance: current.distance + 1,
        pre: madedmoves.length - 1,
      };
    });

    queue = queue.concat(nextMoves);
  }

  let lastMove = madedmoves[madedmoves.length - 1];
  const path = [lastMove.move];
  for (let i = lastMove.pre; i !== null; i = madedmoves[i].pre) {
    lastMove = madedmoves[i];
    path.push(lastMove.move);
  }
  return `You made it in ${
    madedmoves[madedmoves.length - 1].distance
  } moves! Here's your path ${JSON.stringify(path.reverse())
    .slice(1, -1)
    .replaceAll("],", "]")}`;
}

console.log(knightMoves([3, 3], [4, 3]));
