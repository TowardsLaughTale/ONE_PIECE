/**
 * @subject 题目描述
 * [189] 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 示例 1:
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 示例 2:
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 说明:
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * @thought 解题思路
 * 
 * @result 结果
 * Accepted
35/35 cases passed (96 ms)
Your runtime beats 70.28 % of javascript submissions
Your memory usage beats 44.22 % of javascript submissions (38.8 MB)
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const len = nums.length;
  const m = k % len;
  let start = 0, count = 0;
  while(count < len) {
    let current = start;
    let prev = nums[start];
    do {
        let next = (current + k) % len;
        let temp = nums[next];
        nums[next] = prev;
        prev = temp;
        current = next;
        count++
    } while (start != current);
    start++
  }

  
};
