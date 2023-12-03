# Knight Moves

This project provides a function `knightMoves` that shows the shortest possible way for a knight to get from one square to another on a chessboard. The function outputs all squares the knight will stop on along the way.

## Usage

```javascript
const path = knightMoves([0, 0], [7, 7]);
console.log(path);
```

You made it in 6 moves! Here's your path: [0,0] => [2,1] => [4,2] => [6,3] => [4,4] => [6,5] => [7,7]

### Example

const path = knightMoves([0, 0], [1, 2]);
console.log(path);
You made it in 1 moves! Here's your path: [0,0] => [1,2]

#### Note

Sometimes there is more than one fastest path, and either answer will work.

##### Rules and Considerations

The board is considered to have 2-dimensional coordinates.
The knight follows the standard chess rules for movement.
The function ensures that all moves stay within the board boundaries.
The search algorithm used finds the shortest path between the starting and ending squares.

###### Acknowledgements

This project is inspired by the problem of finding the shortest path for a knight on a chessboard.

Feel free to use and modify this code according to your needs.
