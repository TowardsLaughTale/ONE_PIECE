/**
 * @Subject 396. 旋转函数
 * 给定一个长度为 n 的整数数组 A 。

  假设 Bk 是数组 A 顺时针旋转 k 个位置后的数组，我们定义 A 的“旋转函数” F 为：

  F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]。

  计算F(0), F(1), ..., F(n-1)中的最大值。

  注意:
  可以认为 n 的值小于 105。

  示例:

  A = [4, 3, 2, 6]

  F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
  F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
  F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
  F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

  所以 F(0), F(1), F(2), F(3) 中的最大值是 F(3) = 26 。

 * @Thought 思路分析
  暴力解法，双重循环，一层循环数据，一层循环下标；

 * @Result 运行结果
  执行用时：80 ms, 在所有 JavaScript 提交中击败了81.32%的用户
  内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了30.70%的用户

 * @Complexity 复杂度分析
  时间复杂度: O(n²)
  空间复杂度：O(n)

 * @author 王绍余
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  let count = [];
  for(let i = 0; i < A.length; i++ ) {
      let num = 0;
      for(let j = 0; j < A.length; j++) {
          num += j * A[(i + j) % A.length];
      }
      count.push(num)
  }
  return Math.max(...count);
};

console.log(maxRotateFunction([-2147483648,-2147483648]));