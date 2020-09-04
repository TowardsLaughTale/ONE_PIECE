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
* 找到nums所有item的度 countedNums ，
* 由于最大的度也可能有多个 du，找到最大的度存放在 duArr中
* 遍历 duArr 找出分别在 nums 的左右下标的差然后存在 结果ret中
* 取ret中最小值，即为最短连续子数组的长度

#### 题解
``` 
var findShortestSubArray = function(nums) {
    const duArr = [];
    const ret = [];
    const countedNums = nums.reduce((allNums, num)=>{ 
        if (allNums.has(num)) {
            allNums.set(num, allNums.get(num)+1);
        }else {
            allNums.set(num, 1);
        }
        return allNums;
    }, new Map());
    const du = Math.max.apply(Math, [...countedNums.values()]);
    for (let [key, value] of countedNums.entries()) {
        if (value===du) {
            duArr.push(key);
        }
    }
    duArr.forEach(du=>{
        const start = nums.indexOf(du);
        const end = nums.lastIndexOf(du);
        ret.push(end-start+1);
    })
    return Math.min(...ret);
};
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* 89/89 cases passed (160 ms)
* Your runtime beats 26.11 % of javascript submissions
* Your memory usage beats 56.64 % of javascript submissions (41.1 MB)