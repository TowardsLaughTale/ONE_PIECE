### 414. 第三大的数

<br>

### 题目

> 给定一个非空数组，返回此数组中第三大的数。<br>
如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

<br>

### 示例
```
示例 1:

输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
```

```
示例 2:

输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
```

```
示例 3:

输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```

>来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/third-maximum-number/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

<br>

### 解题思路
```javascript
1、去重
2、倒序排序
3、
    若数组元素大于 3 个，则取第三个元素返回
    小于三个，直接取第一个最大值
```

<br>

### 题解
```javascript
// 用时一般，内存消耗一般
执行用时: 72 ms
内存消耗: 34.6 MB

let thirdMax = function(nums) {
    let list = [...new Set(nums)]
    list = list.sort((a, b) => {
        return b - a
    })
    if (list.length >= 3) {
        return list[2]
    } else {
        return list[0]
    }
}
```

<br>