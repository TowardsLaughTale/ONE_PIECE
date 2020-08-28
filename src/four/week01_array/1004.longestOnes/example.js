/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let max = 0;
  let l = 0, r = 0, len = A.length
  while( l < len && r < len) {
    if (A[r]) {
      r++;
    } else { 
      if (K === 0) {
        if (!A[l]){ K++ }
        l++
      } else {
        r++;
        K--;
      }
    }
    max = Math.max(max, r - l)
  }

  return max;

};
// @lc code=end


longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)

