/*
杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

Accepted
15/15 cases passed (80 ms)
Your runtime beats 53.34 % of javascript submissions
Your memory usage beats 23.54 % of javascript submissions (37.7 MB)
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const number = []
  for (let i = 0; i< numRows;i++) {
    if (i === 0) {
      number.push([1])
    }else if (i === 1) {
      number.push([1, 1])
    } else {
      const upLine = number[i - 1];
      const line = [1]
      for (let j = 1; j< i; j++) {
        line[j] = upLine[j - 1] + upLine[j]
      }
      line.push(1)
      number.push(line)
    }
  }
  return number

};
// @lc code=end

