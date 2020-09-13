/**
 * @param {number[][]} M
 * @return {number[][]}
 */
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// 二维数组的遍历
var imageSmoother = function (M) {
  let rows = M.length,
    columns = M[0].length
  // 创建长度为R的二维数组
  let res = Array.from({ length: rows }, () => [])

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      //周围元素的个数
      let count = 0
      //元素的总和
      res[i][j] = 0
      // 遍历当前元素周围3x3矩阵，保存元素本身和周围元素的总和
      for (let m = i - 1; m <= i + 1; m++) {
        for (let n = j - 1; n <= j + 1; n++) {
          if (m >= 0 && m < rows && n >= 0 && n < columns) {
            res[i][j] += M[m][n]
            count++
          }
        }
      }
      res[i][j] = Math.floor(res[i][j] / count)
    }
  }
  return res
}
