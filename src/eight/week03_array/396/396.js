/*
 * @Subject: 题目描述
    396. 旋转函数
    给定一个长度为 n 的整数数组 A 。
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

 * @Thought: 思路分析
    1. 计算F(0)
    2. 观察发现F(1)与F(0)之间，除了最后一个元素，其他元素的因子都增加1，最后一个元素的因子减少n-1。
        相当于所有元素因子先增加1，然后最后的一个元素的因子减少n。
    3. 数学归纳法，推论到F(k)与F(k-1)之间，递推求出每次的F(k)
    4. 记录最大值，求解最大值
 * @Complexity: 复杂度
    时间复杂度：O(n) 计算F(0)，遍历全部元素；计算所有元素之和，遍历全部元素。迭代计算F(k),计算n次，所以时间复杂度为O(n)
    空间复杂度：O(1) 存储了最大值，每次的F(k)使用了同一个变量，所有元素之和。
 * @Result: 运行结果
 *  17 / 17 个通过测试用例
    状态：通过
    执行用时: 84 ms
    内存消耗: 38.2 MB
 * @Author: eight
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  let max = 0;
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    max += i * A[i];
    total += A[i];
  }
  let pass = max;
  for (let i = 0; i < A.length; i++) {
    pass = pass + total - A.length * A[A.length - 1 - i];
    max = Math.max(pass, max);
  }
  return max;
};

let arr = [4, 3, 2, 6];
console.log(maxRotateFunction(arr));
