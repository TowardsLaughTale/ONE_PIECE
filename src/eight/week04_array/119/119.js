/*
 * @Subject: 题目描述
    119. 杨辉三角 II
    给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
    在杨辉三角中，每个数是它左上方和右上方的数的和。
    示例:
        输入: 3
        输出: [1,3,3,1]
    进阶：
        你可以优化你的算法到 O(k) 空间复杂度吗？
 * @Thought: 思路分析
    1. 计算整个rowIndex+1层的杨辉三角
    2. res和mirror交替保存当前层的杨辉三角
    2. 取出最后一层
 * @Complexity: 复杂度
    时间复杂度：O(n^2) 创建了整个杨辉三角
    空间复杂度：O(n) 只保留了连续的两行
 * @Result: 运行结果
    34 / 34 个通过测试用例
    状态：通过
    执行用时: 92 ms
    内存消耗: 37.7 MB
 * @Author: eight
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  rowIndex += 1;
  let res = Array(rowIndex);
  let mirror = Array(rowIndex);
  for (let i = 0; i < rowIndex; i++) {
    if (i % 2 == 0) {
      res[0] = 1;
      res[i] = 1;
      if (i === 0) {
        continue;
      }
      for (let j = 1; j < i; j++) {
        res[j] = mirror[j - 1] + mirror[j];
      }
    } else {
      mirror[0] = 1;
      mirror[i] = 1;
      if (i === 1) {
        continue;
      }
      for (let j = 1; j < i; j++) {
        mirror[j] = res[j - 1] + res[j];
      }
    }
  }
  if (rowIndex % 2 === 0) {
    return mirror;
  } else {
    return res;
  }
};
console.log(getRow(5));
