/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */
//! 思路：建立一个只存放前三大数的数组ret，如果数组长度==3取最小的，反之取最大
//! 遍历数组每次取ret的最小值与当前元素去重对比，大于最小值就替换ret最小值
// 26/26 cases passed (104 ms)
// Your runtime beats 24.76 % of javascript submissions
// Your memory usage beats 52.06 % of javascript submissions (37.7 MB)
// @lc code=start
/** 
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const ret = [];
    let i = 0;
    for (; i < nums.length; i++) {
        if (!ret.includes(nums[i])) {
            if (ret.length<3) {
                ret.push(nums[i])
            }else{
                const min = Math.min(...ret);
                const minI = ret.findIndex(el=>el===min)
                if (nums[i]>min) {
                    ret.splice(minI, 1, nums[i])
                }
            }
        }
    }
    return ret.length===3 ? Math.min(...ret) : Math.max(...ret);
};
// @lc code=end

