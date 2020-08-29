/*
 * @Subject: 题目描述
    集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
    给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
    示例 1:
        输入: nums = [1,2,2,4]
        输出: [2,3]
    注意:
        给定数组的长度范围是 [2, 10000]。
        给定的数组是无序的。
 * @Thought: 思路分析
    思路分析：官方使用map来解感觉更好
    1. 先对数组排序
    2. 遍历找出重复的数，并记录位置
    3. 遍历找出不连续的数
        a. 找到连续的数
        b. 找不到不连续的数，说明缺少的数可能位于头部或尾部
 * @Complexity: 复杂度
    时间复杂度：排序O(nlogn) + 遍历O(n)  => O(nlogn)
    空间复杂度：O(1)
 * @Result: 运行结果
    49/49 cases passed (128 ms)
    Your runtime beats 31.14 % of javascript submissions
    Your memory usage beats 37.5 % of javascript submissions (41.7 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b)

    const ret = []
    for (let i = 0; i < nums.length; i++) {
        // 说明是重复的数
        if (nums[i] === nums[i + 1]) {
            ret[0] = nums[i]
            continue
        }
        // 说明是不连续的数，有可能找不到
        if (nums[i] + 2 === nums[i + 1]) {
            ret[1] = nums[i] + 1
            continue
        }
    }
    // 没有找到不连续的数
    if (!ret[1]) {
        ret[1] = nums[0] === 1 ? nums[nums.length - 1] + 1 : 1
    }
    return ret
};
// @lc code=end