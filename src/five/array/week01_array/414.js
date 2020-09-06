/**
 * @param {number[]} nums
 * @return {number}
 */
//考虑到去重
var thirdMax = function (nums) {
  var arr = [...new Set(nums)].sort((a, b) => {
    return b - a
  })
  if (arr.length == 1) return arr[0]
  return arr.length >= 3 ? arr[2] : arr[0]
}
