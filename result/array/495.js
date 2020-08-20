/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// [1,2] 2
// [1,4] 2
// [1,2,3,4] 1
var findPoisonedDuration = function (timeSeries, duration) {
  var res = 0
  for (var i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] == duration) {
      res = res + duration
    } else if (timeSeries[i] < duration) {
      res = res + duration - timeSeries[i]
    } else if (
      i + 1 <= timeSeries.length &&
      i - 1 >= 0 &&
      timeSeries[i] > res + timeSeries[i - 1]
    ) {
      res = res + duration
      console.log('res ', res)
    }
    // else if (
    //   i - 1 >= 0 &&
    //   i + 1 <= timeSeries.length &&
    //   timeSeries[i] + res > timeSeries[i + 1]
    // ) {
    //   res = res + timeSeries[i + 1] - timeSeries[i]
    //   console.log('left ', res)
    // }
  }
  return res
}
