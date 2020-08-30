#### 题目：给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

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

#### 思路
* 排序过滤去重 => sortArr 递增的 没有重复项的 正整数数组
* 找到第一个与[1-n]不符规则的下标 firstIdx，取sortArr[firstIdx]

#### 题解
``` 
var firstMissingPositive = function(nums) {
    // 排序过滤去重=>递增的没有重复项的正整数数组
    const sortArr = nums.sort((a,b)=>a-b).filter((it,idx,arr)=>it>0&&arr.indexOf(it,0)===idx)
    // 第一个出现
    const firstIdx = sortArr.findIndex((it,idx)=>it-(idx+1)!==0);
    return  sortArr.length>0 ? 
                firstIdx === -1 ? 
                    Math.max(...sortArr)+1 :
                firstIdx === 0 ? 
                    1 :
                    sortArr[firstIdx-1]+1 :
            1
};
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* 165/165 cases passed (72 ms)
* Your runtime beats 89.4 % of javascript submissions
* Your memory usage beats 22.18 % of javascript submissions (37.3 MB)