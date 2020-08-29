/*
 * @Subject: 题目描述
    给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
    示例 1:
        输入: [1,2,0]
        输出: 3
    示例 2:
        输入: [3,4,-1,1]
        输出: 2
    示例 3:
        输入: [7,8,9,11,12]
        输出: 1
    提示：
        你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
 * @Thought: 思路分析
    1. 首先对于这类问题查找未出现的数且时间复杂度要求为O(n)的，则第一时间用map
    2. 而题目有要求空间复杂度O(1)，则需要考虑在原数组上进行操作
    3. 关键点是如何在原数组上构建类似于map的结构: Array[index]和Map[key]之间的转换
        a. 遍历数组，将下标对应的值的下标的值变为string类型
        b. A[0] = 1; A[1] = 2  =>  A[0]=1; A[1] = '2'
        c. 当在后面的循环到A[1]时，判断其为字符串，则说明 1 这个数字有出现过。
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(1)
 * @Result: 运行结果
    165/165 cases passed (88 ms)
    Your runtime beats 29.98 % of javascript submissions
    Your memory usage beats 67.96 % of javascript submissions (37.8 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (!nums.length) return 1

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index] - 0
        // 如果数组值大于0且小于数字长度
        // 大于数组长度的数字不考虑，如果有大于的说明一定有不连续的
        if (element > 0 && element < nums.length) {
            nums[element] = nums[element] + ''
        }

        // 等于数组长度的需要单独处理，不然的话，就会增加一个数组的额外空间[ 1, '2', '3', 'undefined' ]
        // 因为在上面的循环中，是从1开始循环。
        // 说明数组的第一个元素nums[0]刚好没有用到，那么就存储记录数组长度的值有出现过
        // 这种情况只有数组从1开始，且是连续的才会出现，例如：[1,2,3,4]
        if (element === nums.length) {
            nums[0] = element + ''
        }
    }

    let i = 1
    while (i <= nums.length) {
        const value = nums[i]
        if (typeof value === 'number') {
            return i
        }
        i++
    }

    if(nums[0] - 0 === nums.length) {
        return i
    }

    return i - 1
};
// @lc code=end