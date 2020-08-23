let findPoisonedDuration = function(timeSeries, duration) {
    if (!timeSeries || timeSeries.length === 0) {
        return 0
    }
    let total = duration
    for (let i = 1; i < timeSeries.length; i++) {
        const dis = timeSeries[i] - timeSeries[i - 1];
        if (dis === 0) {
            continue
        } else if (dis > 0 && dis < duration) {
            total += (dis / duration) * duration
        } else if (dis >= duration) {
            total += duration
        }        
    }
    return total
};



var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length == 0) {return 0}
    let j = 0,sum = duration
    while(j < timeSeries.length - 1) {
        let timeDiffer = timeSeries[j + 1] - timeSeries[j]
        if (timeDiffer >= duration) {
            sum += duration
        } else {
            sum += timeDiffer
        }
        j ++
    }
     return sum
};

// let timeSeries = [1,2]
let timeSeries = [1,2,3,4,5,6,7,8,9]
// let timeSeries = [1,4]
let duration = 1
// let duration = 2

let r = findPoisonedDuration(timeSeries, duration)
console.log('r :>> ', r)


// 1|数组中是每次攻击次数

// 2、中毒时间等于，次数 * 持续时间

// 3、减去叠加重合时间，等于实际生效时间 
// 第二个元素值减去第一个元素值
//     若大于等于二，算一次完整生效时间
//     若等于0，则不算有效时间
//     若大于0，小于二，则使用差值*生效时间