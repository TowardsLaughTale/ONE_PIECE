// 执行用时：92 ms, 在所有 JavaScript 提交中击败了57.28%的用户
// 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了11.54%的用户
let findPoisonedDuration = function(timeSeries, duration) {
    // 不存在或者为空，直接返回 0
    if (!timeSeries || timeSeries.length === 0) {
        return 0
    }
    // 初始化第一次攻击的有效时间
    let total = duration

    // 从 1 开始循环
    for (let i = 1; i < timeSeries.length; i++) {
        // 计算前后差值
        const dis = timeSeries[i] - timeSeries[i - 1]

        // 等于 0，说明是同时发起，不累加
        if (dis === 0) {
            continue
        } else if (dis > 0 && dis < duration) {
            // 大于 0 且小于持续时间，计算差值所占百分比 * 持续时间（此处多余）
            total += (dis / duration) * duration
        } else if (dis >= duration) {
            // 前后间隔超过持续时间，直接进行累加
            total += duration
        }        
    }
    return total
}


// 执行用时：84 ms, 在所有 JavaScript 提交中击败了80.58%的用户
// 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了29.49%的用户
let findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length == 0) return 0
    let j = 0,sum = duration

    // 循环数组
    while(j < timeSeries.length - 1) {
        // 计算差值
        let timeDiffer = timeSeries[j + 1] - timeSeries[j]

        // 差值大于持续时间，直接累加时间
        if (timeDiffer >= duration) {
            sum += duration
        } else {
            // 否则，直接累加差值
            sum += timeDiffer
        }
        j ++
    }
    return sum
}

// let timeSeries = [1,2]
let timeSeries = [1,2,3,4,5,6,7,8,9]
// let timeSeries = [1,4]
let duration = 1
// let duration = 2

let r = findPoisonedDuration(timeSeries, duration)
console.log('r :>> ', r)