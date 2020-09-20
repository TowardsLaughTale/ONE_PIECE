/**
 * @Subject 661. 图片平滑器
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

 * @Thought 思路分析
  循环k，每次把最后一个元素添加到第一个；

 * @Result 运行结果
  执行用时：160 ms, 在所有 JavaScript 提交中击败了79.2%的用户
  内存消耗：44 MB, 在所有 JavaScript 提交中击败了67.09%的用户


 * @author 王绍余
 *  
 */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let m = M
  let r = m.length
  let c = m[0].length
  let res = []
  for (let i = 0; i < r; i++) {
    res[i] = []
    for (let j = 0; j < c; j++) {
      let sum = 0, count = 0
      for (let row = i - 1; row <= i + 1; row++) {
        if (row < 0 || row >= r) continue
        for (let col = j - 1; col <= j + 1; col++) {
          if (col < 0 || col >= c) continue
          sum += m[row][col]
          count++
        }
      }
      res[i][j] = Math.floor(sum / count)
    }
  }
  return res
}