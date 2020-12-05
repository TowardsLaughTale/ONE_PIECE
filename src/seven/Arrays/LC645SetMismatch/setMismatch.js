
/**
 * LC 645 set mismatch
 * 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

示例 1:

输入: nums = [1,2,2,4]
输出: [2,3]
注意:

给定数组的长度范围是 [2, 10000]。
给定的数组是无序的

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-mismatch
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

//这题思路就是在一次循环内通过首次出现的index和末次出现的index不一样来找到重复的数， 
//然后将1-n整数的和以及目前数组的和求出， 缺失的那个数就是两组和之间的差值再加上重复的那个数。
//说人话就是假如[1,2,2,4],一个循环内求出1+2+2+4的和以及1+2+3+4的和（每次累加i+1），
//两个结果做差是1，再加上重复的那个数字就是缺失的那个数字的值。
//另外，感觉题目描述不是十分严谨， 如果把重复的数替换为应出现的数，那么这个数组是包含1-n所有连续不间断的整数吗？
//如果碰到[2,1,4,4,6]这种怎么办呢，官方对这组数据的结果是3， 那么5也是missing的
//解法已发布到：https://leetcode-cn.com/problems/set-mismatch/solution/js-yi-ci-xun-huan-bu-yao-e-wai-kong-jian-by-sean-c/
//Time Complexity: O(n), Space Complexity: O(1)
var findErrorNums = function(nums) {
    let sum = 0, dup = 0, less = 0;
    for(let i = 0; i < nums.length; i ++ ){
        less += nums[i];
        sum += i + 1;
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            dup = nums[i];
        }
    }
    return [dup, sum - less + dup];
};