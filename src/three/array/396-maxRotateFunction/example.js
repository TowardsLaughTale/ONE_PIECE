// 执行用时：64 ms, 在所有 JavaScript 提交中击败了100.00%的用户
// 内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了40.00%的用户
let maxRotateFunction = function (A) {
    let tmpSum = 0,
        max = -Infinity,
        sum = 0,
        first = 0

    if (A.length == 0) return 0

    for (let i = 0; i < A.length; i++) {
        sum += A[i]
        first += i * A[i]
    }
    tmpSum = first

    for (let i = 0; i < A.length; i++) {
        tmpSum = tmpSum + sum - A.length * A[A.length - 1 - i]
        max = Math.max(tmpSum, max, first)
    }
    return max
}
