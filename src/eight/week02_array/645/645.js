/*
 * @Subject: 题目描述
    集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
    给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
    示例 1:
        输入: nums = [1,2,2,4]
        输出: [2,3]
    注意:
        给定数组的长度范围是 [2, 10000]。
        给定的数组是无序的。
 * @Thought: 思路分析
    1. 对nums进行计数排序，对任意一个计数计数第二次，则认为其重复。计数一次时，计数下标对应的元素值更改为负数作为标记。
    2. 重新遍历nums，寻找未被计数的下标，对应缺失的元素。
 * @Complexity: 复杂度
    时间复杂度：O(n) 两次遍历数组
    空间复杂度：O(1) 返回空间和中间变量都是常数个元素
 * @Result: 运行结果
    49 / 49 个通过测试用例
    状态：通过
    执行用时: 104 ms
    内存消耗: 40.7 MB
 * @Author: eight
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]);
    if (nums[temp - 1] > 0) {
      nums[temp - 1] = -nums[temp - 1];
    } else if (nums[temp - 1] < 0) {
      res[0] = temp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[1] = i + 1;
      break;
    }
  }
  return res;
};

let arr = [1, 2, 2, 4];
console.log(findErrorNums(arr));
