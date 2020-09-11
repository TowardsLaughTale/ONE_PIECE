/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]

执行结果：
通过
显示详情
执行用时：
72 ms , 在所有 JavaScript 提交中击败了 83.42% 的用户
内存消耗：
38 MB , 在所有 JavaScript 提交中击败了 17.68% 的用户
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  const getLine = (index) => {
      if (index === 0) {
          return [1]
      } else if(index === 1) {
          return [1, 1]
      } else {
          const upper = getLine(index - 1)
          const res = [1]
          for(let i = 0;i< upper.length-1; i++) {
              res.push(upper[i] + upper[i+1])
          }
          res.push(1)
          return res;
      }
  }

  return getLine(rowIndex)
};
