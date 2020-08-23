/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */
// 输入: [1,4], 2
// 输出: 4
// 原因: 第 1 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒末结束。
// 第 4 秒初，提莫再次攻击艾希，使得艾希获得另外 2 秒中毒时间。
// 所以最终输出 4 秒。
//! 思路：此题最后转化为计算重叠时间的问题
//! 遍历时间数组timeSeries，计算每两项的重叠时间，若无重叠则total累加duration
//! 最后一次攻击没有重叠 最后一次直接累加duration

// 39/39 cases passed (84 ms)
// Your runtime beats 53.19 % of javascript submissions
// Your memory usage beats 36.17 % of javascript submissions (40.8 MB)
// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    timeSeries.forEach((time, idx)=>{
        total = total + 
                (
                    timeSeries[idx+1]?
                    (timeSeries[idx+1]-time)>=duration?
                    duration:
                    (timeSeries[idx+1]-time):
                    duration
                )
    })
    return total;
};
// @lc code=end

