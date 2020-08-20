/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  var arr = nums.sort((a, b) => {
    return b - a
  })
  var res1 = arr[0] * arr[1] * arr[2]
  // 考虑到负数
  var res2 = arr[0] * arr[arr.length - 1] * arr[arr.length - 2]
  return Math.max(res1, res2)
}
