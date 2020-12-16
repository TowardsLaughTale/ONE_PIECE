### 303. 区域和检索 - 数组不可变

<br>

### 题目

> 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

实现 NumArray 类：<br>
NumArray(int[] nums) 使用数组 nums 初始化对象<br>
int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）


>提示：<br>
0 <= nums.length <= 104<br>
-105 <= nums[i] <= 105<br>
0 <= i <= j < nums.length<br>
最多调用 104 次 sumRange 方法

<br>

### 示例
```
示例 1:

输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
```

>来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/range-sum-query-immutable/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

<br>
