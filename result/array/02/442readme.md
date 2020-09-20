#### 题目：给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]

#### 思路
* 

#### 题解
``` javascript
let findDuplicates = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        // 若数组下标：(当前元素值 - 1)对应的值大于 0，
        // 则设置该对应的值为负数。
        // 后续若对应的值小于 0，说明当前元素值，在前面出现过，因为本来全部数组元素是正值，这里为负数，说明前面出现过，被设置成了负值
        // [4,1,3,2,1] ===> [4,1,3,-2,1]
        // [4,1,3,2,1] ===> [-4,1,3,-2,1]
        // [4,1,3,2,1] ===> [-4,1,-3,-2,1]
        // [4,1,3,2,1] ===> [-4,-1,-3,-2,1]
        // [4,1,3,2,1] ===> [-4,-1,-3,-2,1]
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1
        } else {
            arr.push(Math.abs(nums[i]))
        }
    }
    return arr
}
```
#### 复杂度

#### 提交结果