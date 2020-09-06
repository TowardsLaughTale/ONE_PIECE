/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 * @Subject: 题目描述
 * 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。
 * 示例:
 * 输入: [1,2,3]
 * 输出: 3
 * 解释:
 * 只需要3次移动（注意每次移动会增加两个元素的值）：
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 * @Thought: 思路分析
 * 将除了一个元素之外的全部元素+1，等价于将该元素-1，因为我们只对元素的相对大小感兴趣。
 * 因此，该问题简化为需要进行的减法次数。
 * 
 * 显然，我们只需要将所有的数都减到最小的数即可。
 * 
 * @Complexity: 复杂度
 * 空间 O(1)
 * 时间 O(n)
 * @Result: 运行结果
 * Accepted
 * 84/84 cases passed (96 ms)
 * Your runtime beats 50.98 % of javascript submissions
 * Your memory usage beats 73.91 % of javascript submissions (40.5 MB)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let len = nums.length, min;
  for (let i = 0; i < len; i++) {
      min = min === undefined? nums[i] : Math.min(min, nums[i]);
  }
  
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    moves += nums[i] - min;
  }
  return moves;
};
// @lc code=end

