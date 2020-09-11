/**
 * @subject 题目描述
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 * 
 * @thought 解题思路
 * 
 * @result 结果
 * Accepted
21/21 cases passed (92 ms)
Your runtime beats 49.31 % of javascript submissions
Your memory usage beats 22.81 % of javascript submissions (39.9 MB)
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let l = 0, r = 1, len = nums.length;
  while(l < len) {
    if (r <= l) {
      r = l + 1
    }
    if (!nums[l]) { // l 指向 -> 0
      while(!nums[r] && r < len) { // 找到非0 右边
        r++
      }
      if (r === len) { // 右边全为0
        break;
      }
      let temp = nums[r]
      nums[r] = nums[l]
      nums[l] = temp
    }
    l++
  }
};
