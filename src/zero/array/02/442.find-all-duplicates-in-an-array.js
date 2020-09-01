/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */
//! 28/28 cases passed (5496 ms)
//! Your runtime beats 5.02 % of javascript submissions
//! Your memory usage beats 44.63 % of javascript submissions (47.1 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    return nums.sort((a,b)=>a-b).filter((it,i,arr)=>{
        return arr.indexOf(it, 0) !== i;
    })
};
// @lc code=end
