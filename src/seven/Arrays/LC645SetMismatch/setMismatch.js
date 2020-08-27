
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