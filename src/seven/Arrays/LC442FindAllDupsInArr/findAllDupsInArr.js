/**
 * 
442. 数组中重复的数据

给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//跟LC448思路类似，但其实更简单些，一次循环就可以出来而且没有额外空间，in-place哈希
//遍历数组，将遍历到的数组value作为index去找value所对应的index里的值，并将其乘负一，如果当前值已经是-1了，说明已经遇到value了，就找到重复的了
var findDuplicates = function(nums) {
    const res = [];
    for(let num of nums){
        let abs = Math.abs(num);
        if(nums[abs - 1] < 0) res.push(abs)
          nums[abs - 1] *= -1;
    }
    return res;
};