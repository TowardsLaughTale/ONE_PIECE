/*
 * @Subject: 题目描述
    189. 旋转数组
    给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
    示例 1:
        输入: [1,2,3,4,5,6,7] 和 k = 3
        输出: [5,6,7,1,2,3,4]
        解释:
            向右旋转 1 步: [7,1,2,3,4,5,6]
            向右旋转 2 步: [6,7,1,2,3,4,5]
            向右旋转 3 步: [5,6,7,1,2,3,4]
    示例 2:
        输入: [-1,-100,3,99] 和 k = 2
        输出: [3,99,-1,-100]
        解释: 
        向右旋转 1 步: [99,-1,-100,3]
        向右旋转 2 步: [3,99,-1,-100]
    说明:
        尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
        要求使用空间复杂度为 O(1) 的 原地 算法。
 * @Thought: 思路分析
    解析法，分别求解每个元素在数组旋转之后的位置。
    1. 对于任意元素下标i，新的位置为(i+k)%len
    2. 采用填坑法，从第0个元素开始放入坑中，每次寻找该元素旋转后的位置，然后将旋转后的元素放入坑中，将坑中原来的元素放到该位置。
    3. 对于可能没遍历完全部元素就回到原来位置的情况，记录循环中最小的一次下标取值，如果与当前下标相等则说明循环。跳出循环方法为+1。
    能出现循环，则也不会被第二轮循环的赋值影响
 * @Complexity: 复杂度
    时间复杂度：O(n) 每个元素一次插入目标位置
    空间复杂度：O(1) 使用常数个临时空间
 * @Result: 运行结果
 * @Author: 作者
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  let numy = new Array().concat(...nums, ...nums);
  nums = numy.slice(nums.length - k, 2 * nums.length - k);
  console.log(nums);
  return nums;
};
let nums = [-1, -100, 3, 99];
let k = 10;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
  k %= nums.length;
  let d = nums.length - k;
  let res1 = nums.slice(0, nums.length - k);
  let res2 = nums.slice(nums.length - k, nums.length);
  [...nums] = [...res2, ...res1];
  console.log(nums);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate3 = function (nums, k) {
  k %= nums.length;
  let d = nums.length - k;
  let index = 0,
    dest = nums[0],
    ori = nums[0];
  let newIndex = nums.length;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    newIndex = (index + k) % nums.length;
    dest = nums[newIndex];
    nums[newIndex] = ori;
    index = newIndex;
    if (count === index) {
      count = ++index;
      ori = nums[index];
    } else {
      ori = dest;
    }
  }
  console.log(nums);
};
rotate3(nums, 2);
