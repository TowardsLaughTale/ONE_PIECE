/*
 * @Subject: 题目描述
    54. 螺旋矩阵
    给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
    示例 1:
    输入:
        [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ]
    输出: [1,2,3,6,9,8,7,4,5]
    示例 2:

    输入:
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]
        ]
    输出: [1,2,3,4,8,12,11,10,9,5,6,7]

 * @Thought: 思路分析
    按层分析，从最外层4边左上角开始遍历，遍历完成后，未遍历的空间仍然是一个二维矩阵，可以用同样的方式分层遍历。
 * @Complexity: 复杂度
    时间复杂度：O(n*m) n和m分别为矩阵的长和宽
    空间复杂度：O(1) 除返回数组，只需要常数个空间。并且尾递归，不会因为递归次数使用额外空间。
 * @Result: 运行结果
    22 / 22 个通过测试用例
    状态：通过
    执行用时: 100 ms
    内存消耗: 37 MB

 * @Author: eight
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  let width = matrix[0].length;
  let height = matrix.length;
  browseRect(matrix, 0, 0, matrix.length, matrix[0].length, res);
  console.log(res);
};
var browseRect = function (matrix, baseRow, baseCol, row, col, res) {
  if (Math.min(row, col) <= 0) {
    return;
  }
  if (row == 1) {
    for (let i = 0; i < col; i++) {
      res.push(matrix[baseRow][baseCol + i]);
    }
    return;
  }
  if (col == 1) {
    for (let i = 0; i < row; i++) {
      res.push(matrix[baseRow + i][baseCol]);
    }
    return;
  }
  for (let i = 0; i < col - 1; i++) {
    res.push(matrix[baseRow][baseCol + i]);
  }
  for (let i = 0; i < row - 1; i++) {
    res.push(matrix[baseRow + i][baseCol + col - 1]);
  }
  for (let i = 0; i < col - 1; i++) {
    res.push(matrix[baseRow + row - 1][baseCol + col - 1 - i]);
  }
  for (let i = 0; i < row - 1; i++) {
    res.push(matrix[baseRow + row - 1 - i][baseCol + 0]);
  }
  browseRect(matrix, baseRow + 1, baseCol + 1, row - 2, col - 2, res);
};

const matrix = [[3], [2]];
spiralOrder(matrix);
