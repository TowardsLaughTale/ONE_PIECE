// 49/49 cases passed (104 ms)
// Your runtime beats 52.38 % of javascript submissions
// Your memory usage beats 16.19 % of javascript submissions (44.5 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const s = Array.from(new Set(nums)).reduce((x,y)=>x+y)
    return [nums.reduce((x,y)=>x+y)-s, nums.length*(1+nums.length)/2 -s]
};