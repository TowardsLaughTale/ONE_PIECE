// 执行用时：76 ms, 在所有 JavaScript 提交中击败了92.63%的用户
// 内存消耗：38.3 MB, 在所有 JavaScript 提交中击败了76.56%的用户
let maxCount = function (m, n, ops) {
    ops.forEach(op => {
        m = Math.min(m, op[0])
        n = Math.min(n, op[1])
    })
    return m * n
}