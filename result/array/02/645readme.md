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

#### 题解
``` javascript
let findErrorNums = function(nums) {
    let n = nums.length
    let dup
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1
        // nums[index] 小于 0 则说明重复访问
        if (nums[index] < 0) {
            dup = index + 1
        } else {
            nums[index] *= -1
        }
    }
    let missing;
    for (let i = 0; i < n; i++) {
        // nums[i] 大于 0 则说明没有访问
        if (nums[i] > 0) {
            // 将索引转换成元素
            missing = i + 1
            break
        }
    }
    return [dup, missing]
}
```
#### 复杂度

#### 提交结果