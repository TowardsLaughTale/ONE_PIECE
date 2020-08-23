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