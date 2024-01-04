function make2dArray(rows, cols, value = null) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(value));
}

export default make2dArray;
