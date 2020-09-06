// 设置一个从 1到 当前数组长度的数组

// 循环当前数组，对比正整数是否存在，存在则设置负值

// 循环当前数组
//     若当前元素为负值，说明存在，则忽略
//     如果为正值，说明是最小正整数

// 执行用时：76 ms, 在所有 JavaScript 提交中击败了65.31%的用户
// 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了84.54%的用户
let firstMissingPositive = function(nums) {
    if (nums.length === 0) return 1
    let arr = new Array(nums.length).fill().map((v,i) => i + 1)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && arr[nums[i] - 1] > 0) {
            arr[nums[i] - 1] *= -1
        }
    }
    let i = 0
    for (; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i]
        }
    }
    return Math.abs(arr[i - 1]) + 1
}


let firstMissingPositive = function(nums) {
    for (let i = 1;;i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}
// let nums = []
// let nums = [1]
// let nums = [1,2,0]
// let nums = [3,4,-1,1]
let nums = [7,8,9,11,12]
let r = firstMissingPositive(nums)
console.log('r :>> ', r)