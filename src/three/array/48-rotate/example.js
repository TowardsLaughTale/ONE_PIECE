// 执行用时：68 ms, 在所有 JavaScript 提交中击败了98.85%的用户
// 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了40.90%的用户
let rotate = function (matrix) {
    let n = matrix[0].length, tmp
    // 沿左上角到右下角对角线置换矩阵
    // 每置换一次外循环，则内循环需要前进一层，所以需要 j = i 为起始点
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            tmp = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = tmp
        }
    }
    return matrix
}
