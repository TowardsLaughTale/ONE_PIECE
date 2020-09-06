/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//1. 暴力算法：每次移动一个元素，遍历k次
//2. 反转
//[1,2,3,4,5,6,7], k = 3
//3. 借用额外数组，存储移动后的元素
var rotate = function (nums, k) {
  let a = []
  for (let i = 0; i < nums.length; i++) {
    //移动k后的数组元素赋值
    a[(i + k) % nums.length] = nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i]
  }
}
