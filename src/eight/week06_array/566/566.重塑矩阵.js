/*
 * @Subject: 题目描述
   566. 重塑矩阵
   在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。
    给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
    重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
    如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
    示例 1:
    输入: 
    nums = 
    [[1,2],
    [3,4]]
    r = 1, c = 4
    输出: 
    [[1,2,3,4]]
    解释:
    行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
    示例 2:
    输入: 
    nums = 
    [[1,2],
    [3,4]]
    r = 2, c = 4
    输出: 
    [[1,2],
    [3,4]]
    解释:
    没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
    注意：
    给定矩阵的宽和高范围在 [1, 100]。
    给定的 r 和 c 都是正数。
 * @Thought: 思路分析
    1. 判断原数组的元素个数和新数组的元素个数是否相等
    2. 将原数组按行遍历，值放入新数组
 * @Complexity: 复杂度
    时间复杂度：O(m*n) 每个元素分别取值
    空间复杂度：O(m*n) 生成新的返回矩阵所需空间
 * @Result: 运行结果
    56 / 56 个通过测试用例
    状态：通过
    执行用时: 128 ms
    内存消耗: 42.6 MB

 * @Author: eight
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (!(nums && nums.length && nums[0] && nums[0].length)) {
    return nums;
  }
  const [row, col] = [nums.length, nums[0].length];
  if (r * c === row * col) {
    const res = Array(r)
      .fill(0)
      .map((num) => Array(c).fill(0));
    let Rcount = 0;
    let Ccount = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        res[Rcount][Ccount++] = nums[i][j];
        if (Ccount === c) {
          Rcount++;
          Ccount = 0;
        }
      }
    }
    return res;
  }
  return nums;
};
// @lc code=end
const nums = [
  [1, 2],
  [3, 4],
];
const r = 1,
  c = 4;
console.log(matrixReshape(nums, r, c));
