/*
 * @Subject: 题目描述
    118. 杨辉三角
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
 * @Thought: 思路分析
    1. 构造底层的杨辉三角
    2. 递推构造高层的杨辉三角
 * @Complexity: 复杂度
    时间复杂度：O(n^2) 逐个元素赋值
    空间复杂度：O(n) 每行元素都是保存到floor变量
 * @Result: 运行结果
    15 / 15 个通过测试用例
    状态：通过
    执行用时: 92 ms
    内存消耗: 39.4 MB

 * @Author: eight
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let floor = Array(i + 1).fill(1);
    console.log(floor);
    if (i === 0 || i === 1) {
      res.push(floor);
      continue;
    } else {
      for (let j = 1; j < i; j++) {
        floor[j] = res[res.length - 1][j - 1] + res[res.length - 1][j];
      }
    }
    res.push(floor);
  }
  return res;
};
console.log(generate(10));
