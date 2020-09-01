/*
 * @Subject: 题目描述
 * [448] 找到所有数组中消失的数字
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * 示例:
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 输出:
 * [5,6]
 * @Thought: 思路分析
 * 1. 遍历数组，使用result记录已存在的
 * 2. 遍历result， 使用nums记录不存在的
 * @Complexity: 复杂度
 * 空间 O(n)
 * 时间 O(n)
 * @Result: 运行结果
 * Accepted
 * 34/34 cases passed (156 ms)
 * Your runtime beats 47.8 % of javascript submissions
 * Your memory usage beats 24.19 % of javascript submissions (49 MB)
 * @Author: four
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = []
  const len = nums.length
  nums.forEach(num => {
    result[num - 1] = num;
  })

  nums = []
  for (let i = 1; i <= len; i++) {
    if (result[i-1] === undefined) {
      nums.push(i)
    }
  }
  return nums
};
