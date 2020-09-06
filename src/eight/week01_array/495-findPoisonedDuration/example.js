/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let sum = 0;
  let index = 0;
  let turn = 0;
  if (timeSeries.length === 0) return 0;

  for (let time in timeSeries) {
    if (time == 0) {
      sum = 0;
    } else {
      let temp =
        timeSeries[time] - timeSeries[time - 1] >= duration
          ? duration
          : timeSeries[time] - timeSeries[time - 1];
      sum += temp;
    }
  }
  return sum + duration;
};
