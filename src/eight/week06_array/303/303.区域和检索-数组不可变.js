/*
 * @Subject: 题目描述
    303. 区域和检索 - 数组不可变
    给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
    示例：
    给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
    sumRange(0, 2) -> 1
    sumRange(2, 5) -> -1
    sumRange(0, 5) -> -3
    说明:
    你可以假设数组不可变。
    会多次调用 sumRange 方法
 * @Thought: 思路分析
    1. 对数据进行累积求和，新的数组为原先数组的前n项目和
    2. 求差利用下标相减
 * @Complexity: 复杂度
    时间复杂度：O(n) 对原先数组进行一次累积求和
    空间复杂度：O(n) 需要存储累积的数组
 * @Result: 运行结果
    16 / 16 个通过测试用例
    状态：通过
    执行用时: 136 ms
    内存消耗: 44.1 MB

 * @Author: eight
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = Array(nums.length + 1).fill(0);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    this.nums[i + 1] = count;
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.nums[j + 1] - this.nums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end
const nums = [-2, 0, 3, -5, 2, -1];
let a = new NumArray(nums);
console.log(a.sumRange(0, 2));
console.log(a.sumRange(2, 5));
console.log(a.sumRange(0, 5));
