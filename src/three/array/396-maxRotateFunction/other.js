// 数组[ a, b, c]

// F(0) = (0 * a) + (1 * b) + (2 * c)
// F(1) = (1 * a) + (2 * b) + (0 * c)
// F(2) = (2 * a) + (0 * b) + (1 * c)

// 解析下面的规律可以得出。 F1 = F0 + a + b + 2c ; 推理变形得到 F1 = F0 + a + b + c -3c;
// 可以得出结论 F1 = F0 + SUB数组 - ARR.length * arr[arr.length -i] 这个公式

// 递归寻找最大值即可

// 主要问题在于数字里面有负数，所以初始化最大值应该设置为负无穷，不能是0

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
let A = [4, 3, 2, 6]
let r = maxRotateFunction(A)
console.log('r :>> ', r)
