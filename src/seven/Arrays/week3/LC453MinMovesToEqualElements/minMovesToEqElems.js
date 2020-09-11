/**
 * 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。

 

示例:

输入:
[1,2,3]

输出:
3

解释:
只需要3次移动（注意每次移动会增加两个元素的值）：

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @Thought: 数组升序排序，用最大数减去最小数a[n - 1] - a[0] = diff,这个diff就是至少要走的步数，
 * 然后假设数组加1后，原来的最大就不是最大了（并列最大也不算它最大了）,再次用假设加过1 的a[n-2] - a[0]
 * 求出diff，因为大家都是加了1所以新的a[n-2]-a[0]和旧的是一样的，所以说真的做加法。就这样把所有求出的diff
 * 加到一起
 * @Time: O(nlogn)
 * @Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let moves = 0;
    nums.sort();
    for(let i = nums.length - 1 ; i > 0; i -- ){
        moves += nums[i] - nums[0];
    }
    return moves;
};
/**
 * @Thought:数学方法，把累计加1问题看成是一个元素减1,原来是 1到n-1 全部加1，现在是把数组中所有元素减1一直减到
 * 跟最小数相等，这个累差的和就是相当于要走的步数
 * @param {number[]} nums
 * @return {number}
 */
var minMoves_math = function(nums) {
    let moves = 0;
    let min = Math.min(...nums);
    for(let i = 0 ; i < nums.length ; i ++ ){
        moves += nums[i] - min
    }
    return moves;
};
//[1,2,3,4] 1 - 1 + 2 - 1 + 3 - 1 + 4 - 1 = 1 + 2 + 3 + 4 - 4 * 1