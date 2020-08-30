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
