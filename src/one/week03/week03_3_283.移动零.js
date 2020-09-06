/*
 * @Subject: 题目描述
    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
    示例:
        输入: [0,1,0,3,12]
        输出: [1,3,12,0,0]
    说明:
        必须在原数组上操作，不能拷贝额外的数组。
        尽量减少操作次数。
 * @Thought: 思路分析
    循环数组，将为0的数放到数组最后。需要注意的是要处理好遍历数组的游标：
        1. 当遇到为0的时，移动到最后，游标不变，数组长度--（说明元素已经遍历过了）
        2. 当没有遇到为0时，游标++；数组长度不变
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(1)
 * @Result: 运行结果
    21/21 cases passed (96 ms)
    Your runtime beats 38.33 % of javascript submissions
    Your memory usage beats 36.42 % of javascript submissions (39.7 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums.length) return

    let len = nums.length
    let index = 0

    while (index < len) {
        const num = nums[index]
        if (num === 0) {
            nums.splice(index, 1)
            nums.push(0)
            len--
        } else {
            index++
        }
    }

};
// @lc code=end

