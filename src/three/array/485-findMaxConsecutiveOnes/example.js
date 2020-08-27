let findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0
    let count = 0
    nums.forEach(num => {
        if (num === 1) {
            // 等于 1，计数加 1，并且更新最大 1 的个数
            count++
            if (count > maxCount) {
                maxCount = count
            }
        } else {
            // 若断开，不等于 1，则零时计数 count 重置为 0
            count = 0
        }
    })
    return maxCount
}