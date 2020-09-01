// 执行用时：108 ms, 在所有 JavaScript 提交中击败了47.64%的用户
// 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了27.94%的用户
let findErrorNums = function(nums) {
    let obj = {},max = 0,re = 0,q = 0
    nums.forEach(n => {
        if (!obj[n]) {
            obj[n] = 1
        } else {
            re = n
        }
        if (max < n) {
            max = n
        }
    })
    for (let i = 1; i < nums.length + 1; i++) {
        if (!obj[i]) {
            q = i
            break
        }
    }
    if (!q) {
        return max
    }
    return [re, q]
}


// 已知 nums 中所有数字都是正数，且处于 1 到 n 之间。
// 遍历 nums 中的所有数字，根据数字 i 找到 nums[i]，
// 如果是第一次访问 nums[i]，将它反转为负数。

// 如果是第二次访问，则会发现它已经是负数。
// 因此，可以根据访问一个数字时它是否为负数找出重复数字。

// 完成上述操作后，所有出现过的数字对应索引处的数字都是负数，
// 只有缺失数字 j 对应的索引处仍然是正数。

// 执行用时：88 ms, 在所有 JavaScript 提交中击败了80.75%的用户
// 内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了73.53%的用户
let findErrorNums = function(nums) {
    let n = nums.length
    let dup
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1
        // nums[index] 小于 0 则说明重复访问
        if (nums[index] < 0) {
            dup = index + 1
        } else {
            nums[index] *= -1
        }
    }
    let missing;
    for (let i = 0; i < n; i++) {
        // nums[i] 大于 0 则说明没有访问
        if (nums[i] > 0) {
            // 将索引转换成元素
            missing = i + 1
            break
        }
    }
    return [dup, missing]
}
// let nums = [1,2,2,4]
let nums = [-1,-2,6, -5, -7, -2,-4]
// let nums = [2,2]
// let nums = [1,1]
// let nums = [1,2]

let r = findErrorNums(nums)
console.log('r :>> ', r)