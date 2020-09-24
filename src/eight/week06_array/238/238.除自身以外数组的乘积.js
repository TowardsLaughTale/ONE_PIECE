/*
 * @Subject: 题目描述
    238.除自身以外数组的乘积
 * @Thought: 思路分析
    1. 将每个元素分别乘以下标小于这个元素的元素乘积
    2. 将每个元素分别乘以下标大于这个元素的元素乘积
 * @Complexity: 复杂度
    时间复杂度：O(n) 两次遍历数组
    空间复杂度：O(1) 使用count记录前n、后n个元素乘积
 * @Result: 运行结果
    18 / 18 个通过测试用例
    状态：通过
    执行用时: 104 ms
    内存消耗: 43.4 MB
 * @Author: eight
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let count = 1;
  const res = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length - 1; i++) {
    count *= nums[i];
    res[i + 1] *= count;
  }
  count = 1;
  console.log(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    count *= nums[i];
    res[i - 1] *= count;
  }
  console.log(res);
  return res;
};
// @lc code=end
const mat = [1, 2, 3, 4];
productExceptSelf(mat);
