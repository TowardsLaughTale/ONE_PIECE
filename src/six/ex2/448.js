/**
 * @Subject:题目描述
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
  找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 *  示例 1:
        输入:
        [4,3,2,7,8,2,3,1]

        输出:
        [5,6]

 * @Thought：思路分析
    先将数组去重正序排序，因为数组是从1开始的，所以遍历判断下标+1是否和当前值相等，如果不相等那么就是未出现的数字，最后再用filter将空的数过滤掉
 * @Complexity：复杂度
 * @result：运行结果
 * 执行用时：4476 ms, 在所有 JavaScript 提交中击败了7.06%的用户
    内存消耗：48.9 MB, 在所有 JavaScript 提交中击败了30.95%的用户
 * @author 天
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  nums = [...new Set(nums)].sort((a, b) => a-b)
  return nums.map((v,k)=>{
      if(k+1!==v){
          return k+1
      }
  }).filter(v=>v)
};
