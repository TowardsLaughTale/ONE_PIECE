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
