/**
 * @Subject 697. 数组的度
 *给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

  你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

  示例 1:

  输入: [1, 2, 2, 3, 1]
  输出: 2
  解释: 
  输入数组的度是2，因为元素1和2的出现频数最大，均为2.
  连续子数组里面拥有相同度的有如下所示:
  [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
  最短连续子数组[2, 2]的长度为2，所以返回2.
  示例 2:

  输入: [1,2,2,3,1,4,2]
  输出: 6
  注意:

  nums.length 在1到50,000区间范围内。
  nums[i] 是一个在0到49,999范围内的整数。

 * @Thought 思路分析
  通过一个空对象把数组中每个数出现的次数保存起来，并把这个出现最大的次数保存一下，再通过循环对象把这个数取出来去
  数组中取这个值第一次和最后一次出现的位置；

 * @Result 运行结果
  执行用时：192 ms, 在所有 JavaScript 提交中击败了28.53%的用户
  内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了93.71%的用户

 * @复杂度分析
  时间复杂度：O(n)
  空间复杂度：O(n)

 * @author 王绍余
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let count = nums.length;
  let max = 0;
  let obj = {};
  nums.forEach((item) => {
    if(obj[item]) {
      obj[item]++;
    }else {
      obj[item] = 1;
    }
    max = Math.max(max, obj[item])
  })
  Object.keys(obj).forEach(k => {
    if(obj[k] === max){
      count = Math.min(count, nums.lastIndexOf(Number(k)) - nums.indexOf(Number(k)) + 1);
    }
  })
  return count;
};