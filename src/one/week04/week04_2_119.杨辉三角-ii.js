/*
 * @Subject: 题目描述
    给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
    在杨辉三角中，每个数是它左上方和右上方的数的和。
    示例:
        输入: 3
        输出: [1,3,3,1]
    进阶：
        你可以优化你的算法到 O(k) 空间复杂度吗？
 * @Thought: 思路分析
    逻辑和118的逻辑基本一样，需要注意的是：
    O(k)的空间复杂度；就要求是在一个长度为K的数组上进行原地操作，注意考虑临界位，
    即数组下标的操作，因为当前下标的元素再下次运算时还需要使用：
        [1,2,1,1]=>[3,2,1,1]=>[3,3,1,1]=>[3,3,1,1]=>[1,3,3,1]
        newArr[index] = oldArr[index] + old[index+1]
 * @Complexity: 复杂度
    时间复杂度：O(n^2)
    空间复杂度：O(k)
 * @Result: 运行结果
    34/34 cases passed (76 ms)
    Your runtime beats 70.41 % of javascript submissions
    Your memory usage beats 26.69 % of javascript submissions (37.8 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex + 1 === 1) return [1]
    if (rowIndex + 1 === 2) return [1, 1]

    let i = 2
    const ret = new Array(rowIndex + 1).fill(1)
    while (i <= rowIndex) {
        // 当前层数组
        for (let index = 0; index < i - 1; index++) {
            const num = ret[index] + ret[index + 1]
            ret[index] = num
        }
        ret.pop()
        ret.unshift(1)
        i++
    }
    return ret
};
// @lc code=end

