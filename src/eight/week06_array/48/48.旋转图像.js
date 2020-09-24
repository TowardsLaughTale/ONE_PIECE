/*
 * @Subject: 题目描述
    48旋转图像
    给定一个 n × n 的二维矩阵表示一个图像。
    将图像顺时针旋转 90 度。
    说明：
    你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
    示例 1:
    给定 matrix = 
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ],
    原地旋转输入矩阵，使其变为:
    [
    [7,4,1],
    [8,5,2],
    [9,6,3]
    ]
    示例 2:
    给定 matrix =
    [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
    ], 
    原地旋转输入矩阵，使其变为:
    [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
    ]
 * @Thought: 思路分析
    1. 从外层到内层，将每个元素分别旋转一次，不重复，不遗漏
    2. 虽然全部元素改变位置，但是从循环上看，每一层的每一条边，只有n-1个元素需要旋转90度
    3. 如果n是奇数，则只循环到n/2层，因为下一层只有 一个中心元素不需要旋转；
    4. 如果n是偶数，则恰好循环到n/2层，因为下一层就是第n/2层
    5. j的位置受i的位置的影响，每层减少2，因此也可以通过j的设置防止重复层数的遍历
 * @Complexity: 复杂度
    时间复杂度：O(n^2) 将每个元素分别旋转90度
    空间复杂度：O(0) 使用常数个元素空间，temp
 * @Result: 运行结果
    21 / 21 个通过测试用例
    状态：通过
    执行用时: 100 ms
    内存消耗: 37.1 MB

 * @Author: eight
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
  console.log(matrix);
  return matrix;
};
// @lc code=end
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matb = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
rotate(matb);
