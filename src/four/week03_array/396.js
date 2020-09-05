/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 * 
 * Accepted
17/17 cases passed (2184 ms)
Your runtime beats 14.29 % of javascript submissions
Your memory usage beats 40 % of javascript submissions (38.8 MB)
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  const len = A.length
  let max;
  for(let i = 0;i< len;i++) {
    let start = (len - i) % len
    let sum = 0
    for (let j = 0; j< len; j++) {
      const cur = (start + j) % len
      sum = sum + j * A[cur]
    }
    max = (max === undefined)?sum:Math.max(sum, max)
  }
  return (max === undefined)?0: max
};
// @lc code=end

