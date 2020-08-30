/**
 * 
41. 缺失的第一个正数
给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

 

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
 

提示：

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//in-place哈希，将遍历到的当前value换到index为value - 1的位置上去以做成排序效果，再次遍历“哈希排序”好的数组，当某个位置value - 1不等于当前index时就说明它是缺失的，因为正常在第一步交换完后value - 1 应该等于index
var firstMissingPositive = function(nums) {
    //[1,2,0],[3,4,-1,1] -> [-1,4,3,1] -> [-1,1,3,4]
    //[0,1,-1]
    if(!nums || nums.length === 0) return 1;
    for(let i = 0; i < nums.length; i ++ ){//只有正数以及小于数组长度的还有没有排好序的需要换
        while(nums[i] >= 1 && nums[i] <= nums.length &&
           nums[nums[i] - 1] !== nums[i]){
            let tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    for(let j = 0; j < nums.length; j ++ ){
        if(nums[j] - 1 !== j) return j + 1;
    }
    return nums.length + 1;
};
//如果没有空间复杂度要求可以用哈希表，把数组中所有数都加进去，然后按index从1开始遍历哈希表到某个index时值不存在说明这块是缺失的，原理就是把无序的数组加到哈希表里以后能通过再一次有序的循环来达到排序所能带来的查找最小正数的效果
// var firstMissingPositive = function(nums) {
//     const s = new Set();
//     nums.forEach(num => s.add(num));
//     for(let i = 1; i <= nums.length; i ++ ) {
//         if(!s.has(i)) return i;
//     }
//     return nums.length + 1;
// }
