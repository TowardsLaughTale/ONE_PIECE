/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    //[1,2,3,4,5,7,10]
        if(timeSeries === null || timeSeries.length === 0) return 0;
        let total = 0;
        for(let i = 0; i < timeSeries.length - 1; i ++ ){
            let d = timeSeries[i + 1] - timeSeries[i];
            if(d < duration){
                total += d;
            }else{
                total +=duration;
            }
        }
        return total + duration;
    };