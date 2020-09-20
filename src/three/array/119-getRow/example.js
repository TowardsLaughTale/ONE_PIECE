// 执行用时：72 ms, 在所有 JavaScript 提交中击败了85.78%的用户
// 内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了8.04%的用户
let getRow = function (numRows) {
    numRows++
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
    return res[res.length - 1]
}