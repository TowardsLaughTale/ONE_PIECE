/*
 * @Subject: 题目描述
    给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。找到所有出现两次的元素。
    示例：
    输入:
        [4,3,2,7,8,2,3,1]
    输出:
        [2,3]
 * @Thought: 思路分析
    1. 使用计数排序，将原数组当作辅助数组进行排序
    2. 每个元素计数时，第一次标记使用负号，第二次标记加减一个小数
    3. 重新遍历寻找计数2次的元素，并删除其他的元素
 * @Complexity: 复杂度
    时间复杂度：O(n) 一次遍历计数排序，一次遍历寻找标记的元素，删除若干元素
    空间复杂度：O(1) 辅助数组使用原来数组的空间
 * @Result: 运行结果 
    28 / 28 个通过测试用例
    状态：通过
    执行用时：308 ms
    内存消耗：49.2 MB
 * @Author: eight
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const temp = Math.round(Math.abs(nums[i]));
    if (nums[temp - 1] > 0) {
      nums[temp - 1] = -nums[temp - 1];
    } else {
      nums[temp - 1] += 0.1;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== Math.round(nums[i])) {
      nums[i] = i + 1;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums;
};
let arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr));
