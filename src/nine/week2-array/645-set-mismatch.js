/**
 * @Subject 645. 错误的集合
 * 
  集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，
  导致集合丢失了一个整数并且有一个元素重复。给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找
  到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

  示例 1:

  输入: nums = [1,2,2,4]
  输出: [2,3]
  注意:

  给定数组的长度范围是 [2, 10000]。
  给定的数组是无序的。
  
 * @Thought 思路分析
  1.数组排序，
  2.循环数组，
  重复元素：通过判断下标的方式，i===indexOf, 与lastIndexOf对比；不相等即重复元素
  丢失元素：判断数组中是否存在 i + 1，不存在，丢失元素即为i + 1；

 * @Result 运行结果
  执行用时：2356 ms, 在所有 JavaScript 提交中击败了5.54%的用户
  内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了47.92%的用户

 * @Complexity 复杂度分析
  时间复杂度： O(nlogn)
  空间复杂度： O(1)

 * @author 王绍余
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let z = 0,
      k = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.lastIndexOf(nums[i])) {
      z = nums[i];
    }
    if (nums.indexOf(i + 1) === -1) {
      k = i + 1;
    }
  }
  return [z, k];
};
