/*
 * @Subject: 题目描述
    给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
    找到所有在 [1, n] 范围之间没有出现在数组中的数字。
    您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
    示例:
        输入:
        [4,3,2,7,8,2,3,1]
        输出:
        [5,6]
 * @Thought: 思路分析
    思路分析：
    1. 若可以使用额外的空间，则使用map的方式来处理比较方便
    2. 题目要求不能使用额外的空间，则只能在原数组上进行操作
    3. 解题关键点为：
       a. 考虑到数组的长度和数组中数的关系
       b. 用数组的数对应index位置上的数的正负来标记这个数是否有出现过
          [4,3,2,7,8,2,3,1]  4对应的index(3)位置上的数为7  [4,3,2,-7,8,2,3,1]
 * @Complexity: 复杂度
 *  时间复杂度：O(n)
    空间复杂度：不需要额外的空间
 * @Result: 运行结果
    34/34 cases passed (128 ms)
    Your runtime beats 76.81 % of javascript submissions
    Your memory usage beats 58 % of javascript submissions (46 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    for (let index = 0; index < nums.length; index++) {
        // 获取当前数的绝对值
        const element = Math.abs(nums[index])
        // 对应数的index上的数取负数
        nums[element - 1] = -Math.abs(nums[element - 1])
    }

    const ret = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > 0) {
            ret.push(index + 1)
        }
    }
    return ret
};
// @lc code=end