/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnesV1 = function (nums) {
  var max = 0
  var len = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      len = 0
      continue
    } else {
      len++
      max = Math.max(max, len)
    }
  }
  return max
}

var findMaxConsecutiveOnesV2 = function (nums) {
  //考虑到元素的特殊性，转换成字符串
  //以0分割成元素值只有1的数组
  //数组排序,并取出最后一个最大的元素值，即长度最长的1
  return nums.join('').split(0).sort().pop().length
}
