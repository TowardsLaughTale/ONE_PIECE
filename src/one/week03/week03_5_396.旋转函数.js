/*
 * @Subject: 题目描述
    给定一个长度为 n 的整数数组 A 。
    假设 Bk 是数组 A 顺时针旋转 k 个位置后的数组，我们定义 A 的“旋转函数” F 为：
    F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]。
    计算F(0), F(1), ..., F(n-1)中的最大值。
    注意:
      可以认为 n 的值小于 10^5。
    示例:
      A = [4, 3, 2, 6]
      F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
      F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
      F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
      F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
      所以 F(0), F(1), F(2), F(3) 中的最大值是 F(3) = 26 。
 * @Thought: 思路分析
    递推公式
    F(n) = F(n-1) + arr + arr.length * arr[arr.length-1]
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(1)
 * @Result: 运行结果
  17/17 cases passed (88 ms)
  Your runtime beats 58.54 % of javascript submissions
  Your memory usage beats 95 % of javascript submissions (38.1 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  // 结果
  let ret = -Infinity
  // 数组各个数的和
  let arrTotal = 0

  // 先计算F0的值
  let f = 0
  for (let index = 0; index < A.length; index++) {
    arrTotal += A[index]
    f += index * A[index]
  }
  ret = Math.max(f, ret)

  let k = 1;
  // 外层循环1到n
  while (k < A.length) {
    // 保存上一个f的值
    f = f + arrTotal - A.length * A[A.length - k]
    ret = Math.max(f, ret)

    k++
  }

  return ret
};
// @lc code=end

