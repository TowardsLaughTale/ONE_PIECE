/**
 * @Subject 485. 最大连续1的个数
 * 给定一个二进制数组， 计算其中最大连续1的个数。

    示例 1:

    输入: [1,1,0,1,1,1]
    输出: 3
    解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
    注意：

    输入的数组只包含 0 和1。
    输入数组的长度是正整数，且不超过 10,000。

 * @Thought 思路分析
    遍历数组，如果是1变量就一直++，碰到0就等于0；

 * @Result 运行结果
    执行用时：92 ms, 在所有 JavaScript 提交中击败了56.86%的用户
    内存消耗：40.4 MB, 在所有 JavaScript 提交中击败了65.02%的用户
 * @author 王绍余
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            temp ++;
            if(temp > max) {
                max = temp;
            }
        }else {
            temp = 0;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
