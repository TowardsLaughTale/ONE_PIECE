// 递减 满足 nums[i] <= nums[i + 1]，所以循环对比是否满足这个条件
// 按理来说，只要数组中，仅仅只存在一个不满足这个条件的，那么修改不满足的这个数，就可以成为递减数列
// 实际会有问题
// 一、[3, 4, 2, 3]
// 3 < 4, 4 > 2，出现一次
// 若改变 2 设置成 4，此时满足递减条件；但是接下来 4 > 3 又出现一次 不满足
// [3, 4, 4, 3]
// 此处下标 i 代指对应的值
// 所以若出现 i > i + 1 的情况，那么也要满足 i + 2 >=  i，否则修改之后，依然不满足条件

// 二、[3, 4, 2, 3]
// - 1 < 4，4 > 2 出现一次
// 若改变 4 为 2，此时满足递减条件；但是此前 3 > 2， 导致不满足递减条件
// [3, 2, 2, 3]
// 此处下标 i 代指对应的值
// 所以若出现 i > i + 1 的情况，那么也要满足 i + 1 >=  i - 1，否则修改之后，依然不满足条件

// 执行用时：84 ms, 在所有 JavaScript 提交中击败了84.67%的用户
// 内存消耗：40.7 MB, 在所有 JavaScript 提交中击败了14.05%的用户
let checkPossibility = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++
            if (nums[i + 2] < nums[i] && nums[i - 1] > nums[i + 1]) {
                return false
            }
            if (count >= 2) {
                return false
            }
        }
    }
    return true
}

// 1、
// 计数 count 初始为 1
// 初始对比前两个值是否不符合递减

// 后续从下标 2 开始循环

// 2、
// 此后若出现 前面的值 < 后面的值（nums[i] < nums[i - 1]）
// 则 count--，若减到 0，第二次循环 `命中` 进来说明出现两次不符合条件的，直接返回 false

// 每次` 命中` 进来，既然 nums[i] 比 nums[i - 1] 都要小，那么 如果 nums[i] 比 nums[i - 2] 也要小，
// 那么就要修改 nums[i] 为 nums[i - 1] 的值了，而不是 nums[i - 1] 修改为 nums[i] 的值，好让数组满足递减数列

// 执行用时：84 ms, 在所有 JavaScript 提交中击败了84.67%的用户
// 内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了32.23%的用户
let checkPossibility = function (nums) {
    let len = nums.length
    let count = 1
    if (len === 1) return true
    if (nums[0] > nums[1]) {
        count = 0
    }
    for (let i = 2; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            if (!count) {
                return false
            }
            count--
            //这里的赋值，把nums[i-1]重新赋值给nums[i]，而不是单纯的赋值为1，保持后续的非递减序列的顺序；
            if (nums[i] < nums[i - 2]) {
                nums[i] = nums[i - 1]
            }
        }
    }
    return true
}

let nums = [4, 2, 3]
// let nums = [4, 2, 1]
// let nums = [3, 4, 2, 3]
// let nums = [-1, 4, 2, 3]
let r = checkPossibility(nums)
console.log('r :>> ', r)
