/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 * 20/20 cases passed (84 ms)
Your runtime beats 50.39 % of javascript submissions
Your memory usage beats 43.54 % of javascript submissions (37 MB)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let number = 1;
  const matrix = []

  // 边界 
  let left = 0;
  let right= n -1
  let top = 0;
  let bottom = n - 1;

  // 方向
  let direction = 'right'
  while (left <=right && top <= right) {
    if (direction === 'right') {
      if (!matrix[top]) { matrix[top] = [] }
      for (let i = left; i <= right; i++) {
        matrix[top][i] = number
        number++
      }
      top++
      direction = 'down'
    }
    if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        if (!matrix[i]) { matrix[i] = [] }
        matrix[i][right] = number
        number++
      }
      right--;
      direction = 'left'
    }
    if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = number
        number++
      }
      bottom--;
      direction = 'top'
    }
    if (direction === 'top') {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = number
        number++
      }
      left++;
      direction = 'right'
    }
  }


  return matrix;



};
// @lc code=end

