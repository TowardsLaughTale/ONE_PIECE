/*
 * @Subject: 题目描述
 * 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 * 示例 1:
 * 输入: nums = [1,2,2,4]
 * 输出: [2,3]
 * 注意:
 * 给定数组的长度范围是 [2, 10000]。
 * 给定的数组是无序的。
 * @Thought: 思路分析
 * 1. 遍历数组，使用一个map记录数组内数字出现的次数
 * 2. 循环1～n，通过map[n]
 *      判断数字出现多于1次，则放到repeat数组内
 *      数字从未出现过，则放到missing数组内
 * 3. 返回repeat和missing数组
 * @Complexity: 复杂度
 * 空间 O(n)
 * 时间 O(n)
 * @Result: 运行结果
 * Accepted
 * 49/49 cases passed (108 ms)
 * Your runtime beats 47.57 % of javascript submissions
 * Your memory usage beats 27.14 % of javascript submissions (42.4 MB)
 * @Author: four
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const cacheMap = {}
  nums.forEach((n) => {
    if (cacheMap[n] !== undefined) {
      cacheMap[n] = cacheMap[n] + 1
    } else {
      cacheMap[n] = 1
    }
  })
  const repeat = []
  const missing = []
  for(let i = 1; i <= nums.length; i++) {
    if (cacheMap[i] > 1) {
      repeat.push(i)
    } else if (cacheMap[i] === undefined) {
      missing.push(i)
    }
  }
  return repeat.concat(missing)
};
