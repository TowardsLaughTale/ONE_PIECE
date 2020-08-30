/**
 * @Subject 442. 数组中重复的数据
 *
  给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

  找到所有出现两次的元素。

  你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

  示例：

  输入:
  [4,3,2,7,8,2,3,1]

  输出:
  [2,3]

 * @Thought 思路分析
  利用一个空数组，把每一个元素都判断这个数组中是否存在，不存在就添加进去，存在就返回即为重复的元素；

 * @Result 运行结果
  执行用时：4432 ms, 在所有 JavaScript 提交中击败了7.69%的用户
  内存消耗：49 MB, 在所有 JavaScript 提交中击败了31.11%的用户

 * @复杂度分析
  时间复杂度：O(n)
  空间复杂度：O(1)

 * @author 王绍余
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr = [];
    return nums.filter(i => {
      if(arr.includes(i)) {
        return i;
      }
      arr.push(i)
    })
};