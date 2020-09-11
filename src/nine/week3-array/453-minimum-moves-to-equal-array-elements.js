/**
 * @Subject 453. 最小移动次数使数组元素相等
  给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。
  示例:

  输入:
  [1,2,3]

  输出:
  3

  解释:
  只需要3次移动（注意每次移动会增加两个元素的值）：

  [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

 * @Thought 思路分析
  

 * @Result 运行结果
  执行用时：100 ms, 在所有 JavaScript 提交中击败了37.91%的用户
  内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了18.84%的用户

 * @Complexity 复杂度分析
  时间复杂度: O(n)
  空间复杂度：O(1)

 * @author 王绍余
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let minNum = Math.min(...nums);
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
      count += nums[i] - minNum;
  }
  return count;
};