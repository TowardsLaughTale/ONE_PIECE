/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 * 334/334 cases passed (88 ms)
Your runtime beats 79.28 % of javascript submissions
Your memory usage beats 23.19 % of javascript submissions (40.7 MB)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let cnt = 0;                                              
  for(let i = 1; i < nums.length && cnt<=1 ; i++){
      if(nums[i-1] > nums[i]){
          cnt++;
          if(i-2>=0 && nums[i-2] > nums[i]) nums[i] = nums[i-1];
      }
  }
  return cnt<=1;
};
// @lc code=end

