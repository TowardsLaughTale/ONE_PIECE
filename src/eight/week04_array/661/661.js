/*
 * @Subject: 题目描述
    661. 图片平滑器
    包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

    示例 1:

    输入:
        [[1,1,1],
        [1,0,1],
        [1,1,1]]
    输出:
        [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
    解释:
        对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
        对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
        对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
    注意:
        给定矩阵中的整数范围为 [0, 255]。
        矩阵的长和宽的范围均为 [1, 150]。

 * @Thought: 思路分析
    1. 创建一个同纬度的数组
    2. 判断原来的数组是否包含周围8个点，并依次取值
    3. 根据点的位置确定有效点的数量
    4. 求平均值并赋值到新的数组
 * @Complexity: 复杂度
    时间复杂度：O(n*m) n为数组长，m为数组高。总体需要遍历数组一遍
    空间复杂度：O(n*m) 需要拷贝一个新的数组
 * @Result: 运行结果
    执行结果：
    通过
    显示详情执行用时：184 ms, 在所有 JavaScript 提交中击败了28.57%的用户内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * @Author: 作者
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let clone = Array(M.length)
    .fill()
    .map((k, v) => Array(M[0].length));
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      const ltop = M[i - 1] ? M[i - 1][j - 1] || 0 : 0;
      const ttop = M[i - 1] ? M[i - 1][j] || 0 : 0;
      const rtop = M[i - 1] ? M[i - 1][j + 1] || 0 : 0;
      const lleft = M[i][j - 1] || 0;
      const center = M[i][j] || 0;
      const rright = M[i][j + 1] || 0;
      const lbottom = M[i + 1] ? M[i + 1][j - 1] || 0 : 0;
      const bbottom = M[i + 1] ? M[i + 1][j] || 0 : 0;
      const rbottom = M[i + 1] ? M[i + 1][j + 1] || 0 : 0;
      let count = 0;
      if (i == 0 || i == M.length - 1) {
        if (j == 0 || j == M[0].length - 1) {
          count = 4;
        } else {
          count = 6;
        }
      } else if (j == 0 || j == M[0].length - 1) {
        count = 6;
      } else {
        count = 9;
      }

      if (M.length == 1) {
        count = 0;
        for (let cur = j - 1; cur < j + 2; cur++) {
          if (!!M[0][cur] || M[0][cur] == 0) {
            count++;
          }
        }
      }
      if (M[0].length == 1) {
        count = 0;
        for (let cur = i - 1; cur < i + 2; cur++) {
          if (!!M[cur]) {
            count++;
          }
        }
      }
      clone[i][j] = Math.floor(
        (ltop +
          ttop +
          rtop +
          lleft +
          center +
          rright +
          lbottom +
          bbottom +
          rbottom) /
          count
      );
    }
  }
  return clone;
};

let arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
];

console.log(imageSmoother(arr));
