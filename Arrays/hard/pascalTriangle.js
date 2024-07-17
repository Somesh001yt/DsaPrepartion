// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function (numRows) {
  const pas = [];
  for (let i = 0; i < numRows; i++) {
    pas[i] = [];
    pas[i][0] = 1;
    pas[i][i] = 1;
    for (let j = 1; j < i; j++) {
      pas[i][j] = pas[i - 1][j - 1] + pas[i - 1][j];
    }
  }
  return pas;
};
