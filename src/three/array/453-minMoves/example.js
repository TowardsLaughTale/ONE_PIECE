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
