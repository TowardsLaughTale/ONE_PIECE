/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */
//! 34/34 cases passed (6780 ms)
//! Your runtime beats 9.8 % of javascript submissions
//! Your memory usage beats 58.32 % of javascript submissions (45.4 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ret = [];
    nums.forEach((it,i)=>{
        if(nums.indexOf(i + 1) === -1) {
            ret.push(i + 1)
        }
    })
    return ret;
};