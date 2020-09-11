#### 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]

#### 思路
* 遍历[1, n]，直接检索是否在数组中

#### 题解
``` javascript
var findDisappearedNumbers = (nums)=>{
    const ret = [];
    nums.forEach((it,i)=>{
        if(nums.indexOf(i + 1) === -1) {
            ret.push(i + 1)
        }
    })
    return ret;
}
```
#### 复杂度
时间：O(n)
空间：O(n)

#### 提交结果
* 34/34 cases passed (6780 ms)
* Your runtime beats 9.8 % of javascript submissions
* Your memory usage beats 58.32 % of javascript submissions (45.4 MB)