#### 题目：给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]

#### 思路
* 排序=>过滤重复

#### 题解
``` 
var findDuplicates = (nums)=>{
    return nums.sort((a,b)=>a-b).filter((it,i,arr)=>{
        return arr.indexOf(it, 0) !== i;
    })
};
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* 28/28 cases passed (5496 ms)
* Your runtime beats 5.02 % of javascript submissions
* Your memory usage beats 44.63 % of javascript submissions (47.1 MB)