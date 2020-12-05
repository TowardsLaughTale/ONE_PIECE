/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = nums[0], second, third
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) {
      continue
    }
    if (nums[i] > first) {
      third = second
      second = first
      first = nums[i]
    } else if (!second || nums[i] > second) {
      third = second
      second = nums[i]
    } else if (!third || nums[i] > third) {
      third = nums[i]
    }
  }

  return third !== undefined?third:first
};
// @lc code=end


thirdMax([3,3,4,3,4,3,0,3,3])
