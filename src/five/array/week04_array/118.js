/**
 * @param {number} numRows
 * @return {number[][]}
 */
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
var generateV1 = function (numRows) {
  let res = []
  let temp = []
  for (let i = 0; i < numRows - 1; i++) {
    if (i == 0) {
      res[i] = [1]
    }
    if (i == 1) {
      res[i] = [1, 1]
    }
    for (let j = 1; j < res[i - 1].length - 1; j++) {
      temp[j] = res[j - 1] + res[j]
    }
    if (i % 2 == 0) {
      temp[j].unshift(1).concat(temp[j].pop().reverse())
    } else {
      temp[j].unshift(1).concat(temp[j].reverse())
    }

    res[i] = temp
  }
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
var generate = function (numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    let row = []
    row[0] = 1
    row[i] = 1
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        row[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
    res.push(row)
  }
  return res
}
