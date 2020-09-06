/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力解法：找到最大元素和最小元素，每次循环数组元素除最大元素外加1，移动次数加1
// 直至最小元素和最大元素相等
// 2. 排序
var minMoves = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let count = 0
  for (let i = nums.length - 1; i > 0; i--) {
    count += nums[i] - nums[0]
  }
  return count
}
