/*
 * @Subject: 题目描述
    给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
    找到所有出现两次的元素。
    你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
    示例：
        输入:
        [4,3,2,7,8,2,3,1]
        输出:
        [2,3]
 * @Thought: 思路分析
    思路分析：这题和448题很类似
    1. 都需要考虑在原数组上进行操作
    2. 解题关键是如何在原数组上保存 额外的数据 + 本来的数据
    3. 现在考虑在对应的数上加上'|',加几个代表出现几次
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(1)
 * @Result: 运行结果
    28/28 cases passed (308 ms)
    Your runtime beats 15.3 % of javascript submissions
    Your memory usage beats 7.23 % of javascript submissions (55.5 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    for (let index = 0; index < nums.length; index++) {
        const element = typeof nums[index] === 'number'
            ? nums[index]
            : nums[index].split('-')[0] - 0

        // 同 + | 来表示对于数出现的次数
        nums[element - 1] = typeof nums[element - 1] === 'number'
            ? nums[element - 1] + '-' + '|'
            : nums[element - 1] + '|'
    }

    const ret = []
    for (let index = 0; index < nums.length; index++) {
        if (typeof nums[index] === 'string' &&  nums[index].split('-')[1].length === 2) {
            ret.push(index + 1)
        }
    }
    return ret
};
// @lc code=end