// 一、反减法
// 思路：
// 每次操作 n - 1 个数 + 1，直到所有数相等
// 相当于，每次对一个数 - 1，其他不变，直到所有数相等

// 从操作多个数，变成操作一个数

// 那么只要把所有数都减到 最小值 就都相等了
// 最小值可以排序或者对比获取
// 计算每个元素与最小值的差，将这些差相加，即是想要的次数

// 2，2，7，7，7

// 0  0  5  5  5

// ====>  15次

// 二、数学法

// 假设需要 m 次可以让所有数相等，且最终元素值是 x

// 那么构造等式：
// 1、原始数组元素总和 + 增加的数值 = 改变后的数组元素总和
// sum + m * (n - 1) = n * x
// 2、最终元素值 = 最小值 + 增加的值
// x = minVal + m

// 将两个等式结合
// sum + m * (n - 1) = n * (minVal + m)
// sum + mn - m = n * minVal + mn
// n * minVal + mn = sum + mn - m
// m = sum - n * minVal + mn - mn
// m = sum - n * minVal

// 最终可得操作次数为：

// sum - n * minval

// 2，2，7，7，7

// (2 + 2 + 7 + 7 + 7) - 5 * 2 = 25 - 10 = 15

// 执行用时：76 ms, 在所有 JavaScript 提交中击败了93.16%的用户
// 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了39.51%的用户
let minMoves = function (nums) {
    // 一、反减法
    let count = 0
    let min = Math.min(...nums)
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] - min
    }
    return count
}

// 执行用时：88 ms, 在所有 JavaScript 提交中击败了77.16%的用户
// 内存消耗：40.7 MB, 在所有 JavaScript 提交中击败了44.44%的用户
// let minMoves = function (nums) {
//     // 数学法
//     let sum = 0
//     let min = Math.min(...nums)
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum - nums.length * min
// }

// 其实 数学法 和 反减法 是一样的
for (let i = 0; i < nums.length; i++) {
    count += nums[i] - min
}
// 减去了 nums.length * min 的值,就变成了下面的样子
// 但是即时的减法，可以有概率减少相加造成的整数越界： javascript 精度缺失问题
// ===>
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}
return sum - nums.length * min

// let nums = [1, 2, 3]
let nums = [2, 2, 7, 7, 7]
// let nums = [1, 5]
// let nums = [1, 1, 2147483647]
// let nums = [1, 2, 2147483647]   2147483646 2147483645 0
// let nums = [1]
// let nums = [0]
let r = minMoves(nums)
console.log('r :>> ', r)
