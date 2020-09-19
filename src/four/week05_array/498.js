/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (!matrix.length) {
    return []
  }
  const firstLine = matrix[0]
  const lastIndex = firstLine.length - 1
  const iLen = matrix.length
  function getLine(i, j, lineIndex) {
    const lineArr = []
    while (i < iLen && j >= 0) {
      lineArr.push(matrix[i][j])
      i++;
      j--;
    }
    return lineIndex % 2? lineArr: lineArr.reverse()
  }

  let result = []
  let lineIndex = 0;
  // right
  for (let n = 0; n < firstLine.length; n++) {
    let i = 0, j = n;
    const line = getLine(i, j, lineIndex);
    result = result.concat(line)
    lineIndex++;
  }
  // bottom
  for (let m = 1; m < iLen; m++) {
    let i = m, j = lastIndex;
    const line = getLine(i, j, lineIndex);
    result = result.concat(line)
    lineIndex++;
  }
  return result
};
console.log('', findDiagonalOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9]])); //sy-log
// @lc code=end

