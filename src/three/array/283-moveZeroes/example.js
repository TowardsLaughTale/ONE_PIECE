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