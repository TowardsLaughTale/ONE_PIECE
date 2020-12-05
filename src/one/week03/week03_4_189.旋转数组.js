/*
 * @Subject: 题目描述
    给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
    示例 1:
        输入: [1,2,3,4,5,6,7] 和 k = 3
        输出: [5,6,7,1,2,3,4]
        解释:
        向右旋转 1 步: [7,1,2,3,4,5,6]
        向右旋转 2 步: [6,7,1,2,3,4,5]
        向右旋转 3 步: [5,6,7,1,2,3,4]
    示例 2:
        输入: [-1,-100,3,99] 和 k = 2
        输出: [3,99,-1,-100]
        解释: 
        向右旋转 1 步: [99,-1,-100,3]
        向右旋转 2 步: [3,99,-1,-100]
    说明:
        尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
        要求使用空间复杂度为 O(1) 的 原地 算法。
 * @Thought: 思路分析
    一：pop/unshift   时间复杂度O(kn)
    二：先截取拼凑  时间复杂度O(kn)
    三：
 * @Complexity: 复杂度
    时间复杂度：O(n)
 * @Result: 运行结果
    35/35 cases passed (84 ms)
    Your runtime beats 88.63 % of javascript submissions
    Your memory usage beats 37.31 % of javascript submissions (38.8 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 方法一
    // let i = 1;
    // while (i <= k) {
    //     nums.unshift(nums.pop())
    //     i++
    // }

    // 方法二
    nums.splice(0, 0, ...nums.splice(nums.length - k, k))
};
// @lc code=end

