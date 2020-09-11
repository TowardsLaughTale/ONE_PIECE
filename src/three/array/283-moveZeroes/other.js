// 循环数组，遇到 0 ，则先移动到数组末尾，
// 再把当前元素移除，数组自动进位
// 移动一次，count 计数一次，
// 同时下标 i 则 减一，以便经过循环 +1 之后，对标进位之后原先的数组元素

// 后面 i + count 的值 大于等于 数组长度，则说明处理结束

// 执行用时：84 ms, 在所有 JavaScript 提交中击败了70.95%的用户
// 内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了29.22%的用户
let moveZeroes = function (nums) {
    let n = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i])
            nums.splice(i, 1)
            n++
            i--
        }
        if (i + n - 1 >= nums.length) {
            return nums
        }
    }
    return nums
}

let nums = [0,1,0,3,12]
let r = moveZeroes(nums)
console.log('r :>> ', r)
