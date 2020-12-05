/**
 * @Subject 448. 找到所有数组中消失的数字
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

  找到所有在 [1, n] 范围之间没有出现在数组中的数字。

  您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

  示例:

  输入:
  [4,3,2,7,8,2,3,1]

  输出:
  [5,6]

 * @Thought 思路分析
  通过下标+1方式判断数组中是否存在该值，不存在就是没有出现的值，将其存入空数组

 * @Result 运行结果
  执行用时：8528 ms, 在所有 JavaScript 提交中击败了16.81%的用户
  内存消耗：45.3 MB, 在所有 JavaScript 提交中击败了96.59%的用户

 * @Complexity 复杂度分析
  时间复杂度：O(n)
  空间复杂度：O(1)

 * @author 王绍余

 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let arr = [];
  for(let i = 0; i < nums.length; i++) {
      if(nums.indexOf(i + 1) === -1) {
          arr.push(i + 1)
      }
  }
  return arr;
};