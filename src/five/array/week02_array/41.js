/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })

  if (nums[nums.length - 1] < 0) {
    return 1
  }
  //边界情况处理
  if (nums.length == 1) {
    if (nums[0] <= 0) {
      return 1
    } else if (nums[0] == 1) {
      return 2
    } else {
      return 1
    }
  }

  let index = 0
  let res = 1
  //找到第一个非负整数的索引index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      index = i
      break
    }
  }
  // 截取到正数数组
  nums = nums.slice(index, nums.length)

  //如果排序后的正整数数组第一个元素大于1，则缺失的最小正整数为1
  if (nums[0] > 1) {
    res = 1
    return res
  }
  //找出第一次找到的缺失的正整数
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i + 1] - nums[i] > 1) {
      res = nums[i] + 1
      break
    } else {
      res = nums[i] + 1
    }
  }
  return res
}
