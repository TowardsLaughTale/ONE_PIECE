/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 83/83 cases passed (140 ms)
// Your runtime beats 31.58 % of javascript submissions
// Your memory usage beats 86.84 % of javascript submissions (39.5 MB)
//! 排序后取前后各三个数的乘积的最大值 
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
};
// @lc code=end