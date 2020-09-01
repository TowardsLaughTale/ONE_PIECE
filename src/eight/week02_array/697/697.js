/*
 * @Subject: 题目描述
    给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
    你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
    示例 1:
        输入: [1, 2, 2, 3, 1]
        输出: 2
        解释: 
            输入数组的度是2，因为元素1和2的出现频数最大，均为2.
            连续子数组里面拥有相同度的有如下所示:
            [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
            最短连续子数组[2, 2]的长度为2，所以返回2.
    示例 2:
        输入: [1,2,2,3,1,4,2]
        输出: 6
    注意:
        nums.length 在1到50,000区间范围内。
        nums[i] 是一个在0到49,999范围内的整数。

 * @Thought: 思路分析
    1. 统计所有整数出现的次数，找到最高的次数。
    2. 然后统计出现最高的整数的首次出现位置和最后出现位置，找到间隔最小的这个整数。
 * @Complexity: 复杂度
    时间复杂度：O(n) 首先统计出现次数遍历一遍数组，然后求最大值出现的次数遍历一遍数组，统计出现次数最大的整数首次和最后出现的位置，又遍历一遍数组。
    空间复杂度：O(max(...nums)) 统计出现次数使用数组存放各元素出现次数，所需最小空间为最大整数的大小。或许可以使用symbol精简到O(n)空间。后面求解最大出现次数使用了map，最坏的情况，如果所有元素都只出现一次，需要O(n) 空间存放整数值和其对应的起止下标。
 * @Result: 运行结果
    89 / 89 个通过测试用例
    状态：通过
    执行用时: 216 ms
    内存消耗: 48.8 MB
 * @Author: 作者
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let { length } = nums;
  let arr = new Array(50000).fill(0);
  for (let i in nums) {
    arr[nums[i]] += 1;
  }
  let maxCount = Math.max(...arr);
  let res = new Map();
  console.log(maxCount);
  for (let i in nums) {
    if (arr[nums[i]] == maxCount) {
      console.log(1);
      if (res.has(nums[i])) {
        res.set(nums[i], {
          start: Math.min(res.get(nums[i]).start, i),
          end: Math.max(res.get(nums[i]).end, i),
        });
      } else {
        res.set(nums[i], {
          start: i,
          end: i,
        });
      }
    }
  }
  let minlen = Number.MAX_VALUE;
  for (let value of res.values()) {
    minlen = Math.min(value.end - value.start + 1, minlen);
    console.log(value);
  }
  return minlen;
};

let arr = [1, 2, 2, 3, 1, 4, 2];
console.log(findShortestSubArray(arr));
