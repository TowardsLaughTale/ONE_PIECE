/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   nums.sort((a,b) => b? 0: -1)
// };

var moveZeroes = function (nums) {
  for (let i = nums.length; i--; ) {
    if (!nums[i]) {
      //将0从数组中删除后添加到数组最后
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}
