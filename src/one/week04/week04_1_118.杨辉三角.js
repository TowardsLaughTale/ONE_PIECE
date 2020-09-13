/*
 * @Subject: 题目描述
    给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
    在杨辉三角中，每个数是它左上方和右上方的数的和。
    示例:
        输入: 5
        输出:
        [
             [1],
            [1,1],
           [1,2,1],
          [1,3,3,1],
         [1,4,6,4,1],
        [1,5,10,10,5,1]
        ]
 * @Thought: 思路分析
    按可执行程序翻译下下题目：
    给定一个数组，按照一定的规律不断的生成下一个新数组，可以考虑使用动态规划
        1. 根据numRows规定生成的次数
        2. 新数组中的每一位数为上一个数组相邻两个数的和
        3. 边界可以不处理
        4. 新数组的长度等于当前所在的层
 * @Complexity: 复杂度
    时间复杂度：O(n^2)
    空间复杂度：O(n^2)
 * @Result: 运行结果
    15/15 cases passed (80 ms)
    Your runtime beats 53.34 % of javascript submissions
    Your memory usage beats 5.18 % of javascript submissions (38.1 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const retArr = []

    let i = 1
    while (i <= numRows) {
        retArr.push(generateCurrentLevel(i, retArr))
        i++
    }

    return retArr
};

// 生成当层数组
var generateCurrentLevel = function (row, retArr) {
    if (row === 1) return [1]
    if (row === 2) return [1, 1]

    // 获取上一层的数组
    const preArr = retArr[retArr.length - 1]

    // 当前层数组
    const arr = [1]
    for (let index = 1; index < row - 1; index++) {
        const num = preArr[index] + preArr[index - 1]
        arr.push(num)
    }
    arr.push(1)

    return arr
}
// @lc code=end

