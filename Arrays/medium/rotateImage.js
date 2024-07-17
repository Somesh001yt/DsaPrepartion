// Q  Rotate Image

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function (matrix) {
  let n = matrix.length;

  function transpose() {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let temp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = temp;
      }
    }
  }

  function rotate() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - 1 - j];
        matrix[i][n - 1 - j] = temp;
      }
    }
  }

  transpose(matrix);
  rotate(matrix);
};
