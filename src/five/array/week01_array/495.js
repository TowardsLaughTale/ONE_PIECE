/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// [1,2] 2
// [1,4] 2
// [1,2,3,4] 1
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0
  let res = 0
  // 记录上次开始时间
  let endTime = timeSeries[0]
  for (const time of timeSeries) {
    //当前时间和上次时间比较，小于间隔时间则表示中毒有叠加
    //总中毒时间加上叠加的时间就是目前总中毒时间
    //叠加时间是time-endTime
    if (time - endTime < duration) {
      res += time - endTime
    } else {
      res += duration
    }
    endTime = time
  }
  //最后一个时间点直接加间隔时间，不管最后一个时间点是否和之前一个时间点有叠加
  return res + duration
}
