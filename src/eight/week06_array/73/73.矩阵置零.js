/*
 * @Subject: 题目描述
    73 矩阵置零
    给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

    示例 1:

    输入: 
    [
    [1,1,1],
    [1,0,1],
    [1,1,1]
    ]
    输出: 
    [
    [1,0,1],
    [0,0,0],
    [1,0,1]
    ]
    示例 2:

    输入: 
    [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
    ]
    输出: 
    [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
    ]
    进阶:

    一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
    一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
    你能想出一个常数空间的解决方案吗？
 * @Thought: 思路分析
 * 1>>
    单独记录为0的上下标，然后取出并置行列为0
 * 2>>
    记录需要置为0的行和列，然后去除并置为0
 * 3>>
    使用首行元素记录本行是否置0，同样使用首列元素记录本列是否置0
 * @Complexity: 复杂度
 * @Result: 运行结果
 * 1>>
    164 / 164 个通过测试用例
    状态：通过
    执行用时: 172 ms
    内存消耗: 44.5 MB
 * 2>>
    164 / 164 个通过测试用例
    状态：通过
    执行用时: 216 ms
    内存消耗: 44.6 MB
 * 3>>
    
 * @Author: 作者
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes_1 = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const temp = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        temp.push({
          row: i,
          col: j,
        });
      }
    }
  }
  for (let ele of temp) {
    for (let i = 0; i < m; i++) {
      matrix[i][ele.col] = 0;
    }
    for (let j = 0; j < n; j++) {
      matrix[ele.row][j] = 0;
    }
  }
  console.log(matrix);
  return matrix;
};

var setZeroes_2 = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const row = new Set();
  const cols = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        cols.add(j);
      }
    }
  }
  for (let val of row) {
    for (let j = 0; j < n; j++) {
      matrix[val][j] = 0;
    }
  }
  for (let val of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][val] = 0;
    }
  }
  console.log(matrix);
  return matrix;
};

var setZeroes = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  let rowFlag = false;
  let colFlag = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      colFlag = true;
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      rowFlag = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        break;
      }
    }
  }
  console.log(matrix);
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        break;
      }
    }
  }
  console.log(matrix);
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  if (rowFlag) {
    matrix[0].fill(0);
  }
  if (colFlag) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  console.log(matrix);
  return matrix;
};

// @lc code=end
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
setZeroes(matrix2);
