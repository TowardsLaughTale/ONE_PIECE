/*
 * @Subject: 题目描述
 * [442] 数组中重复的数据
 * 
 * @Thought: 思路分析
 * 
 * @Complexity: 复杂度
 * 空间 O(1)
 * 时间 O(n)
 * @Result: 运行结果
 * Accepted
28/28 cases passed (144 ms)
Your runtime beats 47.76 % of javascript submissions
Your memory usage beats 82.5 % of javascript submissions (45.6 MB)
 * @Author: four
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const res = []
  for (let i = 1;i <= nums.length;i++) {
    const curNum = Math.abs(nums[i - 1])
    const toIndex = curNum - 1
    const toNum = nums[toIndex]
    if (toNum < 0) {
      res.push(curNum)
    } else {
      nums[toIndex] = -toNum
    }
  }
  return res;
};

