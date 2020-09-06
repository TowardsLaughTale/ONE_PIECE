/**
 * @Subject:题目描述
 * 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
 * 定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 *  示例 1:
        输入:
        nums = [1,2,2,4]

        输出:
         [2,3]

 * @Thought：思路分析
    找到重复出现的正数 以及找到丢失的数据，数组本身是无序的，数组是从1到n的整数；先将数组去重正序排序，然后比较相等元素相邻元素之间大小找到重复的数
    当前的数应该和上一个数+1相等，如果大于的话那么就是丢失的这个数
 * @Complexity：复杂度
 * @result：运行结果
 * 执行用时：136 ms, 在所有 JavaScript 提交中击败了27.96%的用户
    内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了70.43%的用户
 * @author 天
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  if (nums && Array.isArray(nums) && nums.length > 0) {
    let repeatNum = -1;//重复的数
    let missNum = 1; // 丢失的数
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        repeatNum = nums[i];
      } else if (nums[i] > nums[i - 1] + 1) {
        missNum = nums[i - 1] + 1;
      }
    }
    return [
      repeatNum,
      missNum,
    ];
  }
};
