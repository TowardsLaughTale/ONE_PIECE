/**
 * @Subject:题目描述
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。找到所有出现两次的元素。
 *  示例 1:
        输入:
        [4,3,2,7,8,2,3,1]

        输出:
        [2,3]

 * @Thought：思路分析
    通过filter将只出现一次的数过滤掉，filter遍历的时候判断arr数组中是否有当前的值，如果存在说明是出现多次的，就返回，如果没出现就压入arr中进行下一次遍历
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
var findDuplicates = function (nums) {
  let arr = [];
  return nums.filter((v) => {
    if (arr.includes(v)) {
      return v;
    }
    arr.push(v);
  });
};
