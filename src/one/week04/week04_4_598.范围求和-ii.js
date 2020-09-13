/*
 * @Subject: 题目描述
    给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。
    操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。
    在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。
    示例 1:
        输入: 
        m = 3, n = 3
        operations = [[2,2],[3,3]]
        输出: 4
        解释: 
        初始状态, M = 
        [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]

        执行完操作 [2,2] 后, M = 
        [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]]

        执行完操作 [3,3] 后, M = 
        [[2, 2, 1],
        [2, 2, 1],
        [1, 1, 1]]
        M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
    注意:
        m 和 n 的范围是 [1,40000]。
        a 的范围是 [1,m]，b 的范围
 * @Thought: 思路分析
    首先分析操作数组：
        1. 都是大于1的，且每次变化肯定都是从M[0][0]开始
        2. 所有只要求得ops最小公共变换数组的元素个数即为结果
        3. [[2,3],[3,3],[1,1]] => [1,1] => 1
 * @Complexity: 复杂度
    时间复杂度：O(ops)
    空间复杂度：O(1)
 * @Result: 运行结果
    69/69 cases passed (76 ms)
    Your runtime beats 88.1 % of javascript submissions
    Your memory usage beats 67.35 % of javascript submissions (39.6 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length === 0) return m * n

    let minRow = Infinity
    let minCol = Infinity

    for (let i = 0; i < ops.length; i++) {
        const element = ops[i];

        if (element[0] < minRow) {
            minRow = element[0]
        }

        if (element[1] < minCol) {
            minCol = element[1]
        }
    }

    return minRow * minCol
};
// @lc code=end

