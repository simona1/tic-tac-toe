const DIRS = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
];

export default function computeGameOutcome(board) {
  const n = board.length;
  let hasEmptyCells = false;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      const cellValue = board[i][j];
      if (!cellValue) {
        hasEmptyCells = true;
        continue;
      }

      for (const [di, dj] of DIRS) {
        let count = 1;
        let ci = i;
        let cj = j;

        while (true) {
          ci += di;
          cj += dj;
          if (
            ci < 0 ||
            cj < 0 ||
            ci >= n ||
            cj >= n ||
            board[ci][cj] !== cellValue
          ) {
            break;
          }

          ++count;
        }

        if (count >= n) {
          return { gameOver: true, winner: cellValue };
        }
      }
    }
  }
  return { gameOver: !hasEmptyCells, winner: null };
}
