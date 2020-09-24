/*
 * @Subject: 题目描述
    59. 螺旋矩阵 II
    给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
    示例:
    输入: 3
    输出:
        [
            [ 1, 2, 3 ],
            [ 8, 9, 4 ],
            [ 7, 6, 5 ]
        ]
 * @Thought: 思路分析
    从生成一个n*n的空矩阵，然后逐层赋值
 * @Complexity: 复杂度
    时间复杂度：O(n*n) 需要重新遍历整个数组
    空间复杂度：O(1) 除了返回值之外，只需要保存当前计数。
 * @Result: 运行结果
    20 / 20 个通过测试用例
    状态：通过
    执行用时: 84 ms
    内存消耗: 37.1 MB
 * @Author: eight
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  matrix = Array(n)
    .fill(0)
    .map(() => {
      return Array(n).fill(0);
    });
  console.log(matrix);
  browseRect(matrix, 0, 0, n, n, 1);
  console.log(matrix);
};
var browseRect = function (matrix, baseRow, baseCol, row, col, count) {
  if (Math.min(row, col) <= 0) {
    return;
  }
  if (row == 1) {
    for (let i = 0; i < col; i++) {
      matrix[baseRow][baseCol + i] = count++;
    }
    return;
  }
  if (col == 1) {
    for (let i = 0; i < row; i++) {
      matrix[baseRow + i][baseCol] = count++;
    }
    return;
  }
  for (let i = 0; i < col - 1; i++) {
    matrix[baseRow][baseCol + i] = count++;
  }
  for (let i = 0; i < row - 1; i++) {
    matrix[baseRow + i][baseCol + col - 1] = count++;
  }
  for (let i = 0; i < col - 1; i++) {
    matrix[baseRow + row - 1][baseCol + col - 1 - i] = count++;
  }
  for (let i = 0; i < row - 1; i++) {
    matrix[baseRow + row - 1 - i][baseCol + 0] = count++;
  }
  browseRect(matrix, baseRow + 1, baseCol + 1, row - 2, col - 2, count);
};
generateMatrix(3);
