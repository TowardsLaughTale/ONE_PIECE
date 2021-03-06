# firstMissingPositive 缺失的第一个正整数
## 描述
    给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
    示例 1:
      输入: [1,2,0]
      输出: 3
    示例 2:
      输入: [3,4,-1,1]
      输出: 2
    示例 3:
      输入: [7,8,9,11,12]
      输出: 1
    提示：
      你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
## 限制
1. 时间复杂度O(n)
2. 空间复杂度O(1)
## 思路
需要寻找的是最小的未曾出现的正整数，所以思路就是排序之后，从小往大遍历寻找。问题是原来数组是一个乱序的数组，普通排序的方法需要的最低时间复杂度为**O(nlogn)**，需要做的就是找到一个排序复杂度更低的算法。确实有，就是**计数排序**。
这里确实满足使用桶排序的条件：
1. 不关心相同大小元素的下标。
   * 这里元素互补重复，所以不在意下标。
2. 数据分布集中，桶的设置明确。
   * 我们关心的有效数据只有处于0到数组长度n的元素，桶的设置即为0到n
   * 小于等于0的数据我们不关心，因为我们可以返回的最小值为1，更小的数全部不需要在意。
   * 大于数组长度的数我们也不关心，因为一个数大于数组长度，等价于一个本来在数组内部的数，变成了大的数-----因此，这个数本来的位置就空出来了，即出现大于数组长度的数候，我们要查找的值还在**1到数组长度之间**。
3. 桶的标记和桶的空间。
   * 由于每个桶至多只有一个元素，并且负数是可以事先排除的，所以我们可以用负号来作为桶的数量标记。
   * 由于桶排序需要使用O(n)的空间，这里要求O(1)，暂时将本来数组的空间当作桶的空间。
## 流程
1. 判断数组是否为空，是则返回1；
2. 将数组中不在[1,n]的元素全都设置为n+1；
3. 遍历数组，进行桶排序，即以元素的值i作为下标，将下标为i-1的元素的值置为负数。
4. 第3步结束之后，可以放进桶的元素全都放进去了，重新遍历，寻找第一个空的桶（值为正数），即返回的值；
5. 如果第4步未找到返回的值，说明该数组放入的元素为1-n全部元素，应当返回的值为n+1

## 代码
```` JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  //寻找无意义的数据并排除，小于1的和大于数组长度的
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = nums.length + 1;
    }
  }
  //将数组当作哈希表，确认每个数据是否存在
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]);
    if (temp - 1 < nums.length && nums[temp - 1] > 0) {
      nums[temp - 1] = 0 - nums[temp - 1];
    }
  }
  //寻找不存在的第一个数据
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return nums.length + 1;
};
````