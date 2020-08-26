# firstMissingPositive 数组中重复的数据
## 描述
    给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。找到所有出现两次的元素。
    示例：
    输入:
        [4,3,2,7,8,2,3,1]
    输出:
        [2,3]
## 限制
1. 时间复杂度O(n)
2. 空间复杂度O(1)
## 思路
* 体会哈希的强大
1. 对原数组进行哈希编码，将值为i编码为i-1；
2. 遍历原数组，哈希匹配一次后将原来位置设置为相反数，哈希匹配二次进行添加小数位的标记。

## 代码
```` JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const temp = Math.round(Math.abs(nums[i]));
    if (nums[temp - 1] > 0) {
      nums[temp - 1] = -nums[temp - 1];
    } else {
      nums[temp - 1] += 0.1;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== Math.round(nums[i])) {
      nums[i] = i + 1;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums;
};
````