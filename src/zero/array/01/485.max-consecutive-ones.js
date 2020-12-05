/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
// Accepted
// 41/41 cases passed (88 ms)
// Your runtime beats 47.12 % of javascript submissions
// Your memory usage beats 33.22 % of javascript submissions (39.6 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//! 思路：
//! 遍历数组，看到一个1给 mid +1，看到非1就重置 mid 为0，每次拿max与mid对比，取最大值赋值给 max
const findMaxConsecutiveOnes = function(nums) {
    let mid = 0; // 中间变量
    let max = 0; // 输出结果
    nums.map(n=>{
        if (n===1) {
            max = max>mid+1 ? max : mid+1 ;
            mid++;
        }else{
            mid = 0; // 重置中间变量
        }
    });
    return max;
};
// @lc code=end

