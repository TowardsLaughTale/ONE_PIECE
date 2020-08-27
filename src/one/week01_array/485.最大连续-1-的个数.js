/*
 * @Subject: 题目描述
    给定一个二进制数组， 计算其中最大连续1的个数。
    示例 1:
        输入: [1,1,0,1,1,1]
        输出: 3
        解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
    注意：
        输入的数组只包含 0 和1。
        输入数组的长度是正整数，且不超过 10,000。
 * @Thought: 思路分析
    1. 将给定的数组按0拆分成，包含不定个数1的二维数组
    2. 比较二维数组中的每一项的长度，即1的个数，取最大的
 * @Complexity: 复杂度
    时间复杂度O(n) 需遍历split后的数组
    空间复杂度O(1) reduce内部遍历需要的内存
 * @Result: 运行结果
    41/41 cases passed (96 ms)
    Your runtime beats 45.14 % of javascript submissions
    Your memory usage beats 27.4 % of javascript submissions (42.2 MB)
 * @Author: qiukai
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    // [1,1,0,0,1]
    if (nums.length === 0) return 0
 
    return nums.join('') // 11001
       .split('0') // ['11', '', '' , '1']
       .reduce((a, b) => Math.max(a, b.length), 0)
 };