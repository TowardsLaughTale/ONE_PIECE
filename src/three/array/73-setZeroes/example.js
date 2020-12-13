/*
 * @Subject: 题目描述
    给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。
    请使用原地算法。

 * @Thought: 思路分析
    循环遍历每个数组元素
    若遍历到的元素 loc[r][c] 为 0
    则将当前位置 r 行的开头设置为0，当前位置 c 列的开头设置为 0
    1 0 1 1         1 ‘0’ 1 1
    0 0 1 1  ==>   ‘0’ 0  1 1
    1 1 1 1         1  1  1 1
    这样处理直到结束，这样根据最终每行和每列的头部位置
    若为 0，则设置该行或该列全部为 0

    有个意外情况，若第一行第二列 loc[0][1] 值为 0，
    按照上面的逻辑，loc[0][0]将设置为 0， loc[0][1]将设置为 0
    1 0 1 1        ‘0’ ‘0’ 1 1
    1 1 1 1  ==>    1   1  1 1
    1 1 1 1         1   1  1 1
    后续处理将会导致，不在计划内的第一列都设置成 0，明显不符合要求
    1 0 1 1        ‘0’ 0 0 0
    1 1 1 1  ==>    0  0 1 1
    1 1 1 1         0  0 1 1

    所以循环遍历需要从第二行和第二列开始
    第一行/第一列单独判断要设置成 0 的条件：只有第一行/第一列存在 0，才设置

 * @Complexity: 复杂度
    时间复杂度： O(m * n)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：96 ms, 在所有 JavaScript 提交中击败了98.36%的用户
    内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了55.03%的用户
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function (matrix) {
    let m = matrix.length, n = matrix[0].length, firstCol
    
    for (let r = 0; r < m; r++) {
        if (matrix[r][0] === 0) {
            firstCol = true
        }
        
        for (let c = 1; c < n; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0
                matrix[0][c] = 0
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    // 注意此次执行位置不可与下面顺序对换，因为 firstCol 若为 true ，则 0,0 位置肯定会被设置为 0
    // 因为是从第二列开始的，所以若初始点为 0，肯定是第一行存在 0 造成的
    if (matrix[0][0] === 0) {
        for (let c = 0; c < n; c++) {
            matrix[0][c] = 0
        }
    }
    if (firstCol) {
        for (let r = 0; r < m; r++) {
            matrix[r][0] = 0
        }
    }
    return matrix
}  