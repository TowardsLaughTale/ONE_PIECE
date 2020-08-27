/**
@Subject 41.缺失的第一个正数
  给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

  示例 1:
  输入: [1,2,0]
  输出: 3

  示例 2:
  输入: [3,4,-1,1]
  输出: 2

  示例 3:
  输入: [7,8,9,11,12]
  输出:1

  提示：你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

 * @Thought 思路分析
  1.最小的正整数是 1；
  2.从1开始判断数组中是否存在，若存在继续+1判断，不存在当前值就是没有出现的最小正整数；


 * @Result 运行结果
  执行结果：通过显示详情执行用时： 80 ms, 在所有 JavaScript 提交中击败了 48.88%的用户
  内存消耗： 38 MB, 在所有 JavaScript 提交中击败了 42.31%的用户

 * @Author 王绍余
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let count = 1;
    while(nums.includes(count)) {
        count ++;
    }
    return count;
};
