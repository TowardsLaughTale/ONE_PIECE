/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

  let sum = 0;
  for (let i = 0;i< timeSeries.length - 1;i++) {
    sum = sum + Math.min(timeSeries[i + 1] - timeSeries[i], duration)
  }
  if (timeSeries.length) sum= sum + duration
  return sum

};
// @lc code=end


findPoisonedDuration([1,4], 2)
