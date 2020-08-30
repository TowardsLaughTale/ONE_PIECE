/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let first = nums[0], second, third;
  let last = nums[0], lastTwo;
  for (let i = 1;i<nums.length;i++) {
    if (nums[i] >= first) {
      third = second;
      second = first;
      first = nums[i]
    } else if (!second || nums[i] >= second){
      third = second;
      second = nums[i]
    } else if (!third || nums[i] >= third){
      third = nums[i];
    }


    if (nums[i] <= last) {
      lastTwo = last;
      last = nums[i]
    } else if (!lastTwo || nums[i] <= lastTwo) {
      lastTwo = nums[i]
    }
  }

  const maxTree = first * second * third
  const maxWithTwoMin = first * lastTwo * last
  return Math.max(maxTree, maxWithTwoMin)

};
// @lc code=end


maximumProduct([1,2,3])
