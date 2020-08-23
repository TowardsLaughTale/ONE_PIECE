/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;
    for(let i = 0; i < timeSeries.length; i ++) {
        let sum = timeSeries[i+1] - timeSeries[i];
        // 判断两个时间间隔与中毒时间相比
        time += sum < duration ? sum : duration;
    }
    return time
};

console.log(findPoisonedDuration([1, 2], 2));
