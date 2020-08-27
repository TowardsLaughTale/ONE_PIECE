/*
 * @Subject: 题目描述
    给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
    找到所有在 [1, n] 范围之间没有出现在数组中的数字。
    您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
    示例:
        输入:
            [4,3,2,7,8,2,3,1]
        输出:
            [5,6]
 * @Thought: 思路分析
    1. 使用计数排序，以原数组为排序数组对原数组进行排序，非空的计数下标将值标记为负数
    2. 从小到大寻找正数，返回即所求。
 * @Complexity: 复杂度
    时间复杂度：O(n) 遍历两遍数组
    空间复杂度：O(1) 不含返回空间
 * @Result: 运行结果
    34 / 34 个通过测试用例
    状态：通过
    执行用时: 124 ms
    内存消耗: 45.7 MB
 * @Author: eight
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    //nums[i-1]为包含标记的待计数的值，Math.abs()去标记
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(arr));
