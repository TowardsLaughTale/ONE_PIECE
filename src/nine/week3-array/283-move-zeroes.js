/**
 * @Subject 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:

  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
  说明:

  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。

 * @Thought 思路分析
  将数组中的非0元素挨个赋值到数组开头；再次循环数组将剩下位置的元素赋值为0；

 * @Result 运行结果
  执行用时：80 ms, 在所有 JavaScript 提交中击败了81.32%的用户
  内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了30.70%的用户

 * @Complexity 复杂度分析
  时间复杂度: O(n)
  空间复杂度：O(1)

 * @author 王绍余
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
          nums[count] = nums[i];
          count++
      }
  }
  for(; count < nums.length; count++) {
      nums[count] = 0;
  }
  return nums;
};