/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  var maxNum = 0;
  // 排序，从大到小
  var arr = nums.sort((a,b) => b - a);
  // 数组中所有的元素范围是[-1000, 1000] , 要考虑负负得正；
  maxNum = Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[arr.length -1] * arr[arr.length - 2]);
  return maxNum;
};
// 纯正数
console.log(maximumProduct([4,5,8]));
// 有正有负
console.log(maximumProduct([4,5,8,6,-10,-11]));
