// 在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。

// 你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。
/**
 *
 * @param {*} timeSeries 攻击时序数组
 * @param {*} duration 中毒时常
 */
var findPoisonedDuration = (timeSeries, duration) => {
  if (timeSeries.length === 0) return 0;
  // 中毒时间
  let res = 0;
  // 上次攻击时间，从数组第一个开始
  let lastTime = timeSeries[0];
  // 遍历时序数组
  for (const curTime of timeSeries) {
    // 如果时间间隔小于 duration，说明毒效还没用完，就开始了新的攻击
    // 而毒效不会叠加的，所以，多余的 duration 不会在下一个时间间隔起作用
    if (curTime - lastTime < duration) {
        // 累加中毒时间，相邻两次时间差如果小于中毒时长duration，因为中毒时间不会累加，所以只加上相邻两个时间的时间差
      res += curTime - lastTime;
    } else {
        // 否则就加上中毒时间duration
      res += duration;
    }
    // 更新攻击时间
    lastTime = curTime;
  }
//   最后一次肯定会中毒，所以直接加上中毒时间duration
  return res + duration;
};
console.log(findPoisonedDuration([1,2, 4,5], 2));
