/*
 * @Subject: 题目描述
    665. 非递减数列
    给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
    我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
    示例 1:
        输入: nums = [4,2,3]
        输出: true
        解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
    示例 2:
        输入: nums = [4,2,1]
        输出: false
        解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
    说明：
        1 <= n <= 10 ^ 4
        - 10 ^ 5 <= nums[i] <= 10 ^ 5
 * @Thought: 思路分析
    1. 寻找不满足相邻条件的一个元素
    2. 在数组中去除这个元素，确认是否是单调递增；
    3. 在数组中去除这个元素小1的元素，确认是否单调递增；
 * @Complexity: 复杂度
 * @Result: 运行结果
 * @Author: 作者
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] < nums[i - 1]) {
      count = i;
      break;
    }
  }
  if (count == -1) {
    return true;
  }
  let numy = [...nums.slice(0, count), ...nums.slice(count + 1, nums.length)];
  let flagy = true;
  for (let i = 1; i < numy.length; i++) {
    if (numy[i] < numy[i - 1]) {
      flagy = false;
      break;
    }
  }
  if (flagy) return true;

  let numx = [...nums.slice(0, count - 1), ...nums.slice(count, nums.length)];
  let flagx = true;
  for (let i = 1; i < numx.length; i++) {
    if (numx[i] < numx[i - 1]) {
      flagx = false;
    }
  }
  return flagx;
};
let arr = [4, 2, 1];
console.log(checkPossibility(arr));
