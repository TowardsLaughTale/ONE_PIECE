/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  //寻找无意义的数据并排除，小于1的和大于数组长度的
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = nums.length + 1;
    }
  }
  //将数组当作哈希表，确认每个数据是否存在
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]);
    if (temp - 1 < nums.length && nums[temp - 1] > 0) {
      nums[temp - 1] = 0 - nums[temp - 1];
    }
  }
  //寻找不存在的第一个数据
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1]));
