/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let mina = m,minb = n;
  for (let i = 0;i< ops.length; i++) {
      if (mina > ops[i][0]) {
          mina = ops[i][0]
      }
      if (minb > ops[i][1]) {
          minb = ops[i][1]
      }
  }
  return mina * minb
};
// @lc code=end

