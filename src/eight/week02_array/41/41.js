/*
 * @Subject: 题目描述
    给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
    示例 1:
      输入: [1,2,0]
      输出: 3
    示例 2:
      输入: [3,4,-1,1]
      输出: 2
    示例 3:
      输入: [7,8,9,11,12]
      输出: 1
    提示：
      你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
 * @Thought: 思路分析
    1. 用时间复杂度O(n+k)（这里是O(n)）的计数排序对原数组进行部分排序
    2. 从小到大寻找未排序到的计数
    3. 未找到则寻找计数的最大值加一
 * @Complexity: 复杂度
    时间复杂度：O(n) 遍历数组一遍，遍历辅助数组（这里就是部分原数组）
    空间复杂度：O(1) 辅助数组使用的原数组的空间
 * @Result: 运行结果
    165 / 165 个通过测试用例
    状态：通过
    执行用时：100 ms
    内存消耗：37.6 MB
 * @Author: eight
 */
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
