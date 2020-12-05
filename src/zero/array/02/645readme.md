<!-- 645，697，448，442，41，274 -->
#### 645、集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

示例 1:

输入: nums = [1,2,2,4]
输出: [2,3]
注意:

给定数组的长度范围是 [2, 10000]。
给定的数组是无序的。

#### 思路
* 只有一个元素重复，且原数组从1到n
* nums去重后为从1到n仅缺丢失项的数组（去重）
* 当前重复项数组之和 减去 去重数组之和 即为重复项
* 求出原数组（d为1的等差数列，且n=num.length）的和 减去 去重数组之和 即为丢失项

#### 题解
``` javascript
var findErrorNums = (nums) => {
    const s = Array.from(new Set(nums)).reduce((x,y)=>x+y)
    return [nums.reduce((x,y)=>x+y)-s, nums.length*(1+nums.length)/2 -s]
};
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* 49/49 cases passed (104 ms)
* Your runtime beats 52.38 % of javascript submissions
* Your memory usage beats 16.19 % of javascript submissions (44.5 MB)