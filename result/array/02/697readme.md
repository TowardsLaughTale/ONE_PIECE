#### 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

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
nums.length 在1到50,000区间范围内。
nums[i] 是一个在0到49,999范围内的整数。

#### 思路
* 1. 声明两个变量，`maxCount` 存储数字出现最大次数，`minLen` 存储最小子数组长度
* 2. 遍历 `nums` 
*      使用map存储每一个 `num` 的:
*        第一次出现位置 `firstIndex`，
*        出现次数 `count`， 
*        最后出现位置 `lastIndex`
*      计算出，当前数的出现次数 `currentCount`, 以及离第一次出现的长度 `curLen`
*      比较 `currentCount`和`maxCount`, 
*        如果 `currentCount > maxCount`, 记录最大次数 `maxCount = currentCount`， 记录最小长度 `minLen = curLen`
*        如果等于， 比较最小长度， 记录最小长度 `minLen = Math.min(minLen, curLen)`

#### 题解
``` javascript
var findShortestSubArray = function(nums) {
  const map = {}
  let maxCount = 0
  let minLen;
  for (let i = 0;i< nums.length; i++) {
    const curNum = nums[i]
    if (map[curNum] === undefined) {
      map[curNum] = { firstIndex: i, count: 1, lastIndex: i }
    } else {
      map[curNum].count = map[curNum].count + 1;
      map[curNum].lastIndex = i
    }
    const currentCount = map[curNum].count
    const currentLen = map[curNum].lastIndex - map[curNum].firstIndex + 1;
    if (currentCount > maxCount) {
      maxCount = currentCount
      minLen = currentLen
    } else if (currentCount === maxCount){
      if (currentLen < minLen) {
        minLen = currentLen
      }
    }
  }
  return minLen
};
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* Accepted
* 89/89 cases passed (104 ms)
* Your runtime beats 80.77 % of javascript submissions
* Your memory usage beats 99.28 % of javascript submissions (40.7 MB)