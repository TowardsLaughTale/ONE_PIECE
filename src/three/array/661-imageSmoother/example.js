// 执行用时：152 ms, 在所有 JavaScript 提交中击败了89.60%的用户
// 内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了98.73%的用户
let imageSmoother = function (M) {
    let rowlen = M.length, // 数组长度 
        collen = M[0].length // 数组第一个元素的长度
        res = []

    
    // 遍历每行
    for (let i = 0; i < rowlen; i++) {
        // 遍历每行中的各个元素
        res[i] = []
        for (let j = 0; j < collen; j++) {
            let count = 0
            // 以点 1,1 为例子 此时 i = 1, j = 1
            // 有 
            // 0，0  0，1 0，2
            // 1，0       1，2
            // 2，0  2，1 2，2
            // 针对 1，1 这个点，寻找他周围相邻的点
            // 纵坐标上，相对于他自己，有 y - 1 和 y + 1
            // 横坐标上，相对于他自己，有 x - 1 和 x + 1
            for (let n = i - 1; n <= i + 1; ++n) {
                for (let m = j - 1; m <= j + 1; ++m) {
                    res[i][j] = res[i][j] || 0
                    // 当点为边界时候，要防止寻找相邻元素过程中，超出矩阵范围
                    if (n >= 0 && n < rowlen && m >= 0 && m < collen) {
                        res[i][j] += M[n][m]
                        count++
                    }
                }
            }
            res[i][j] = Math.floor(res[i][j] / count)
        }
    }
    return res
}