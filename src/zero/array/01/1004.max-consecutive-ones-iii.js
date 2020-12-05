/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */
// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
// 返回仅包含 1 的最长（连续）子数组的长度。
// 示例 1：
// 输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释： 
// [1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//! 48/48 cases passed (92 ms)
//! Your runtime beats 56.14 % of javascript submissions
//! Your memory usage beats 38.94 % of javascript submissions (41.5 MB)

//! 思路：遍历A数组，
//! j为窗口左下标，i为右下标，当连续为1且K>0的时候 i只管+1，i-j即为窗口长度
//! 当K饱和（为0）后且A[i]=0,左下标j向右移动一位，直到A[i]遇到1，或for循环停止
//! 每一次循环中的窗口长度与上一次对比，取最大值放入res
var longestOnes = function(A, K) {
    let res = 0, i = 0, j = 0;
    for (; i < A.length; i++) {
        // 因为只有0和1，所以非0即1，所以等于1的时候i只管++
        if (A[i] == 0) {
            if (K > 0) {
                K--;
            } else {
                res = Math.max(res, i - j);
                while (A[j++] == 1);
            }
        }
    }
    // 当A最后一个值为1时，走不到循环内部，所以res取不到i-j的值，最后再拿一次最大值
    return Math.max(res, i - j);
};
// @lc code=end

