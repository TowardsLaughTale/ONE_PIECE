/**
 * @Subject 665. 非递减数列
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

    我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。

     

    示例 1:

    输入: nums = [4,2,3]
    输出: true
    解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
    示例 2:

    输入: nums = [4,2,1]
    输出: false
    解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
     

    说明：

    1 <= n <= 10 ^ 4
    - 10 ^ 5 <= nums[i] <= 10 ^ 5

 * @Thought 思路分析
    要求非递减数列其实就是递增或者相等，把每三个数进行比较，把不满足的值更改为满足的值；
    记录值变化的次数，通过判断这个变化次数来判断数组是否满足题目要求

 * @Result 运行结果
  执行用时：80 ms, 在所有 JavaScript 提交中击败了90.32%的用户
  内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了30.70%的用户

 * @Complexity 复杂度分析
  时间复杂度: O(n)
  空间复杂度：O(1)

 * @author 王绍余

 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  if(nums.length < 3) return true;
  if(nums[0] > nums[1]) count ++;
  for(let i = 1; i <= nums.length; i++) {
      let left = nums[i - 1], right = nums[i + 1];
      if( nums[i] > right) {
          count ++;
          if(left > right) {
              nums[i + 1] = nums[i];
          } else {
              nums[i] = right;
          }
      }
  }
  return count <= 1;
};