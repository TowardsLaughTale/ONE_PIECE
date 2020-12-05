/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxConsecutive = 0;
  let currentConsecutive = 0;
  for(let i= 0;i<nums.length;i++) {
    if (nums[i] === 1) {
      currentConsecutive++
    } else {
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive)
      currentConsecutive = 0
    }
  }
  return Math.max(maxConsecutive, currentConsecutive)
};
// @lc code=end

