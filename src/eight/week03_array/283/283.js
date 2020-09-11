/*
 * @Subject: 题目描述
    283. 移动零
    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
    示例:
        输入: [0,1,0,3,12]
        输出: [1,3,12,0,0]
    说明:
        必须在原数组上操作，不能拷贝额外的数组。
        尽量减少操作次数。
 * @Thought: 思路分析
    暴力遍历
        1. 从后向前遍历，寻找第一个0，移动到最后
        2. 从后向前遍历，寻找第二个0，移动到倒数第二个位置
        3. 以此类推，将所有的0移动到最后
    从前向后遍历
        1. 统计每个位置前0的个数
        2. 如果某个元素之前的0的个数不是0，将该元素直接移动到目标位置
 * @Complexity: 复杂度
    暴力遍历
        时间复杂度：O(n)~O(n^2) 最好的情况下没有0，最坏的情况下全是0，需要移动(n*(n-1)/2)次
        空间复杂度：O(1) 使用常数个额外空间
    从前向后遍历
        时间复杂度：O(n)遍历一遍数组
        空间复杂度：O(1)不使用额外空间
 * @Result: 运行结果
    21 / 21 个通过测试用例
    状态：通过
    执行用时: 104 ms
    内存消耗: 40 MB
 * @Author: eight
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
  let index = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      let temp = nums[i];
      for (let j = i + 1; j <= index; j++) {
        nums[j - 1] = nums[j];
      }
      nums[index--] = temp;
    }
  }
  console.log(nums);
};

var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      index++;
    } else if (index > 0) {
      nums[i - index] = nums[i];
      nums[i] = 0;
    }
  }
  console.log(nums);
};

let nums = [1];
moveZeroes(nums);
