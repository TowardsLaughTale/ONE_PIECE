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