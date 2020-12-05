/*
 * @Subject: 题目描述
 * @Thought: 思路分析
    思路分析：
     1. 求得给定数组的度数
     2. 根据度数求得最短的连续子数组
       a. 最短连续子集说明：开头和结尾都是数组度数所对应的数
       b, 可能会有不同的数有相同的度数
 * @Complexity: 复杂度
    时间复杂度：O(n^2)
    空间复杂度：O(1)
 * @Result: 运行结果
    89/89 cases passed (164 ms)
    Your runtime beats 37.32 % of javascript submissions
    Your memory usage beats 94.93 % of javascript submissions (41.1 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    if (nums.length === 1) {
        return 1
    }

    const map = {}
    nums.forEach(num => {
        const key = num.toString()
        const value = map[key]
        if (value) {
            map[key] = value + 1
            return
        }
        map[key] = 1
    })

    let degrees = 1 // 数组的度数
    let degreesNums = [] // 有相同度数的数
    for (let key in map) {
        const value = map[key]
        if (value === degrees) {
            degreesNums.push(key - 0)
        }
        if (value > degrees) {
            degrees = value
            degreesNums = [key - 0]
        }
    }

    let subLength = [] // 有相同度数的数的最小子集长度
    for (let index = 0; index < degreesNums.length; index++) {
        const num = degreesNums[index];

        let i = 0;
        let j = nums.length - 1;
        // 从左开始遍历
        while (nums[i] !== num && i <= j) {
            i++
        }
        // 从右开始遍历
        while (nums[j] !== num && i <= j) {
            j--
        }
        // 在左、右两侧分别找到了对应的数
        if (nums[i] === num && nums[j] === num && i <= j) {
            subLength.push(j - i + 1)
            continue
        }
    }

    return Math.min(...subLength)
};
// @lc code=end