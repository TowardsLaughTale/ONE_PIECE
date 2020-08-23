/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // 排序，从大到小
  var arr = Array.from(new Set(nums.sort((a, b) => b - a)));
  // 判断数组长度是否大于3
  return arr.length >= 3 ? arr[2] : arr[0];
};
