/**
 * @Subject 628. 三个数的最大乘积
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

  示例 1:

  输入: [1,2,3]
  输出: 6
  示例 2:
  
  输入: [1,2,3,4]
  输出: 24
  注意:

  给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
  输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

 * @Thought 思路分析
    首先对数组进行排序，考虑到数组中可能存在负数，负负得正，三个数最大乘积，
    都是正数的话，最大的三个数相乘，有负数的话，最小的两个负数相乘再乘以最大的正数，
    比较这两个值，取最大
 * 
 * @Result
 *  执行用时：180 ms, 在所有 JavaScript 提交中击败了6.30%的用户
 *  内存消耗：42.3 MB, 在所有 JavaScript 提交中击败了22.49%的用户
 * 
 * @author 王绍余
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  var maxNum = 0;
  // 排序，从大到小
  var arr = nums.sort((a,b) => b - a);
  // 数组中所有的元素范围是[-1000, 1000] , 要考虑负负得正；
  maxNum = Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[arr.length -1] * arr[arr.length - 2]);
  return maxNum;
};
// 纯正数
console.log(maximumProduct([4,5,8]));
// 有正有负
console.log(maximumProduct([4,5,8,6,-10,-11]));
