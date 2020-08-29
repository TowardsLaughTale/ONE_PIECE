/**
 * 
448. 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//因为数组本应从1-n，那么循环一遍数组，利用index + 1来代表本应有的所有数，看下这些数在不在现在的数组里，如果不在就是那个缺失的数
var findDisappearedNumbers2 = function(nums) {
    const res = [];
    for(let i = 0; i < nums.length; i ++ ){
        if(nums.indexOf(i + 1) === -1) {
            res.push(i + 1)
        }
    }

    return res;
};

//将nums里面value - 1map成index，把相应index下的数乘-1，然后遍历1-n，找出nums中还是正数的说明没有变过，将其push到结果里
var findDisappearedNumbers = function(nums) {
    const res = [];
    nums.forEach(num => {
        let asbNum = Math.abs(num);//因为有的index可能已经变成负数
        if(nums[asbNum - 1]> 0) nums[asbNum - 1] *= -1;
    })

    for(let i = 1; i <= nums.length; i ++ ){
        if(nums[i - 1] > 0) res.push(i)
    }
    return res;
};
