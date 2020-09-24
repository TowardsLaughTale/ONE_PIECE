/*
 * @Subject: 题目描述
    304. 二维区域和检索 - 矩阵不可变
 * @Thought: 思路分析
    
 * @Complexity: 复杂度
 * @Result: 运行结果
    12 / 12 个通过测试用例
    状态：通过
    执行用时: 136 ms
    内存消耗: 43.2 MB
 * @Author: 作者
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let [row, col] = [matrix.length, matrix[0].length];
  this.matrix = Array(row + 1)
    .fill(0)
    .map((val) => Array(col + 1).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      this.matrix[i + 1][j + 1] = matrix[i][j];
      if (i - 1 >= 0) {
        this.matrix[i + 1][j + 1] += this.matrix[i][j + 1];
      }
      if (j - 1 >= 0) {
        this.matrix[i + 1][j + 1] += this.matrix[i + 1][j];
      }
      this.matrix[i + 1][j + 1] -= this.matrix[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  console.log(this.matrix);
  return (
    this.matrix[row2 + 1][col2 + 1] -
    this.matrix[row2 + 1][col1] -
    this.matrix[row1][col2 + 1] +
    this.matrix[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
let a = new NumMatrix(matrix);
console.log(a.sumRegion(2, 1, 4, 3));
console.log(a.sumRegion(1, 1, 2, 2));
console.log(a.sumRegion(1, 2, 2, 4));
