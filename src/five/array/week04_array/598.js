/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCountV1 = function (m, n, ops) {
  let base = []
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = 0
  }
  for (let j = 0; j < m; j++) {
    base[j] = arr
  }

  //base  [ [ 1, 1, 0 ],
  //        [ 0, 0, 0 ],
  //        [ 0, 0, 0 ] ]

  //[[2,2],[3,3]]
  for (let r = 0; r < ops.length; r++) {
    add(ops[r][0], ops[r][1], base)
  }

  let max = base[0][0]
  let count = 0
  for (let l = 0; l < m; l++) {
    for (let k = 0; k < n; k++) {
      if (base[l][k] == max) {
        count++
      }
      if (base[l][k] > max) {
        count = 0
        count++
        max = Math.max(max, base[l][k])
      }
    }
  }

  return count
}

var add = function (a, b, base) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      base[i][j] = base[i][j] + 1
    }
  }
}

// let base = [
//   [1, 2, 3],
//   [4, 5, 6],
// ]
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log('base[' + i + '][' + j + ']', base[i][j])
//     base[i][j] = base[i][j] + 1
//     console.log('base[' + i + '][' + j + ']', base[i][j])
//   }
//   console.log('base after for j ', base)
// }

// 输入:
// m = 3, n = 3
// operations = [[2,2],[3,3]]
// 输出: 4
// 解释:
// 初始状态, M =
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]

// 执行完操作 [2,2] 后, M =
// [[1, 1, 0],
//  [1, 1, 0],
//  [0, 0, 0]]

// 执行完操作 [3,3] 后, M =
// [[2, 2, 1],
//  [2, 2, 1],
//  [1, 1, 1]]

// M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。

//ops是rx2的二维数组，每次都要加1，所以最终加的总和是每次都会加到的交叉区域，所以取交叉区域x,y轴最小值
var maxCount = function (m, n, ops) {
  if (ops.length == 0) {
    return m * n
  }
  let a = ops[0][0] //x轴
  let b = ops[0][1] //y轴
  for (let i = 0; i < ops.length; i++) {
    a = ops[i][0] < a ? ops[i][0] : a
    b = ops[i][1] < b ? ops[i][1] : b
  }
  return a * b
}
