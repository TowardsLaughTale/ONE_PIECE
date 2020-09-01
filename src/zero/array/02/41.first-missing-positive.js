/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
//! 165/165 cases passed (72 ms)
//! Your runtime beats 89.4 % of javascript submissions
//! Your memory usage beats 22.18 % of javascript submissions (37.3 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 排序过滤去重=>递增的没有重复项的正整数数组
    const sortArr = nums.sort((a,b)=>a-b).filter((it,idx,arr)=>it>0&&arr.indexOf(it,0)===idx)
    // 第一个出现
    const firstIdx = sortArr.findIndex((it,idx)=>it-(idx+1)!==0);
    return  sortArr.length>0 ? 
                firstIdx === -1 ? 
                    Math.max(...sortArr)+1 :
                firstIdx === 0 ? 
                    1 :
                    sortArr[firstIdx-1]+1 :
            1
};
// @lc code=end
