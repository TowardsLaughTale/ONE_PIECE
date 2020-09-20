/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [-1,4,2,3]
// [3,4,2,3]
// [4,2,3]
//此种解法不可能同时处理[3,4,2,3] [4,2,3]所以放弃
var checkPossibilityV1 = function (nums) {
  if (nums.length == 1) {
    return true
  }
  let count = 0
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (i == 1 && nums[i] < nums[i - 1]) {
      count++
      continue
    }
    if (nums[i] > nums[i - 1]) {
      max = Math.max(max, nums[i])
    }
    if (nums[i] < nums[i - 1] || nums[i] < max) {
      if (++count > 1) {
        return false
      } else {
        max = Math.max(max, nums[i - 1])
        continue
      }
    }
    continue
  }
  return true
}

var checkPossibilityV2 = function (nums) {
  if (nums.length == 1) {
    return true
  }
  let m = new Map()
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    m[i] = nums[i]
  }
  nums.sort((a, b) => {
    return a - b
  })

  for (let i = 0; i < nums.length; i++) {
    if (m[i] != nums[i]) {
      if (++count > 1) {
        return false
      } else {
        continue
      }
    } else {
      continue
    }
  }
  return true
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//[5,7,1,8]
var checkPossibilityV3 = function (nums) {
  if (nums.length == 1) {
    return true
  }
  let count = 0
  let max = nums[nums.length - 1]
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i - 1] > nums[i]) {
      max = Math.min(max, nums[i])
      nums[i - 1] = max

      if (++count > 1) {
        return false
      } else {
        continue
      }
    } else {
      continue
    }
  }
  return true
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//1. 暴力解法 因为是非递减数列，所以要保证a[i]>=a[i-1]
//极端情况把a[i]赋值为a[i-1]则数列肯定是非递减数列
//循环每个元素设置为a[i-1]后循环剩下元素是否为非递减数列即可
//2.找索引p
// [-1,4,2,3]
// [3,4,2,3]
// [4,2,3]
var checkPossibility = function (nums) {
  let count = 0
  //p为nums[i]>nums[i+1]的索引位置
  let p = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++
      p = i
      if (count == 2) return false
    }
  }

  if (p == nums.length - 2 || p == 0) {
    return true
  } else {
    if (nums[p + 1] >= nums[p - 1] || nums[p + 2] >= nums[p]) return true
    return false
  }
}
