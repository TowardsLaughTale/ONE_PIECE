/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 * Accepted
 * 165/165 cases passed (84 ms)
 * Your runtime beats 38.36 % of javascript submissions
 * Your memory usage beats 43.55 % of javascript submissions (38 MB)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length
  for(let i = 0;i<len;i++) {
    if (!nums[i] || nums[i] < 0) {
      nums[i] = len + 1
    }
  }

  for(let i = 1;i<=len;i++) {
    const curIndex = i - 1
    const toIndex = Math.abs(nums[curIndex]) - 1
    nums[toIndex] = -Math.abs(nums[toIndex])
  }
  const fIndex = nums.findIndex(n => n > 0)
  
  return fIndex === -1? (nums.length + 1): fIndex+ 1;
};

// @lc code=end

