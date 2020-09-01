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
var maximumProduct = function (nums) {
    /**
     * 思路分析：求3个数的最大乘积
     *  1. 若都是正数，就是求前3大的数
     *  2. 若包含负数，就是求最小的两个负数和最大的一个正数
     */
    let num1 = -Infinity // 第一大
    let num2 = -Infinity // 第二大
    let num3 = -Infinity // 第三大
    let min1 = 0 // 第一小
    let min2 = 0// 第二小

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (num > num1) {
            num3 = num2
            num2 = num1
            num1 = num
        } else if (num > num2) {
            num3 = num2
            num2 = num
        } else if (num > num3) {
            num3 = num
        }

        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2) {
            min2 = num
        }
    }

    return Math.max(num1 * num2 * num3, num1 * min1 * min2)
};
// 时间复杂度O(n)
// 空间复杂度O(1)
// @lc code=end

