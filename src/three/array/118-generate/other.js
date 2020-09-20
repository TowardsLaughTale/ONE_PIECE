// 思路：
// 第 i 行的 j 位值，等于
// i - 1 行的 j - 1 的值 加上 i - 1 行的 j 的值

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了82.44%的用户
// 内存消耗：36.9 MB, 在所有 JavaScript 提交中击败了25.76%的用户
let generate = function (numRows) {
    if (numRows <= 0) return []
    let res = []
    for (let i = 0; i < numRows; i++) {
        let inner = []
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                inner.push(res[i - 1][j - 1] + res[i - 1][j])
            } else {
                inner.push(1)
            }
        }
        res.push(inner)        
    }
    return res
}
let numRows = 5
let r = generate(numRows)
console.log('r :>> ', r)