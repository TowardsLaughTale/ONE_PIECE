/*
 * @Subject: 题目描述
    包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，
    平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
    示例 1:
        输入:
        [
            [1,1,1],
            [1,0,1],
            [1,1,1]
        ]
        输出:
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    解释:
        对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
        对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
        对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
    注意:
        给定矩阵中的整数范围为 [0, 255]。
        矩阵的长和宽的范围均为 [1, 150]。
 * @Thought: 思路分析
    遍历二维数组，求9个数的平均值
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(n)
 * @Result: 运行结果
    202/202 cases passed (184 ms)
    Your runtime beats 27.27 % of javascript submissions
    Your memory usage beats 5.55 % of javascript submissions (46.1 MB)
 * @Author: qiukai
 */
/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    const result = []

    for (let i = 0; i < M.length; i++) {
        const a = M[i];
        result[i] = []

        for (let j = 0; j < a.length; j++) {
            const b = a[j];
            result[i][j] = average(i, j, M)
        }

    }

    return result
};

var average = function (row, col, array) {
    let count = 1
    let sum = array[row][col]

    // 分别获取其它8个数
    if (array[row - 1]) {
        const value1 = array[row - 1][col - 1]
        const value2 = array[row - 1][col]
        const value3 = array[row - 1][col + 1]

        if (value1 !== undefined) {
            count++
            sum += value1
        }

        if (value2 !== undefined) {
            count++
            sum += value2
        }

        if (value3 !== undefined) {
            count++
            sum += value3
        }
    }
    if (array[row + 1]) {
        const value6 = array[row + 1][col - 1]
        const value7 = array[row + 1][col]
        const value8 = array[row + 1][col + 1]
        if (value6 !== undefined) {
            count++
            sum += value6
        }

        if (value7 !== undefined) {
            count++
            sum += value7
        }

        if (value8 !== undefined) {
            count++
            sum += value8
        }
    }
    const value4 = array[row][col - 1]
    const value5 = array[row][col + 1]

    if (value4 !== undefined) {
        count++
        sum += value4
    }
    if (value5 !== undefined) {
        count++
        sum += value5
    }

    return Math.floor(sum / count)
}
// @lc code=end

