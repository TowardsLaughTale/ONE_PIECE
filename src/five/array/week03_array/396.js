/**
 * @param {number[]} A
 * @return {number}
 */

//推导过程
// A = [4, 3, 2, 6]
// B0 = [4,3,2,6]
// B1 = [6,4,3,2]

// F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
// F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
// F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
// F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

//（1）F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-2) * Bk[n-2] + (n-1) * Bk[n-1]
//（2）F(k+1) = 0 * Bk[n-1] + 1 * Bk[0] + 2 * Bk[2] + ... + (n-1) * Bk[n-2]
//（2）-（1）得：F(k+1) - F(k) = (Bk[0] + Bk[1] + ... + Bk[n-2]) - (n-1)*Bk[n-1]
//可得：F(k+1) - F(k) = (Bk[0] + Bk[1] + ... + Bk[n-2] + Bk[n-1]) - n*Bk[n-1]
// 令S=Sum{Bk}
// 有：F(k+1) = F(k) + S - n * Bk[n-1]
var maxRotateFunction = function (A) {
  let len = A.length
  //sum 数组元素总和，无论怎么旋转k个位置数组总和保持不变
  let sum = 0
  //旋转函数f
  let f = 0
  //对sum f进行初始化赋值
  for (let i = 0; i < len; ++i) {
    sum += A[i]
    f += i * A[i]
  }

  let res = f
  for (let i = len - 1; i >= 0; --i) {
    // F(k+1) = F(k) + S - n * Bk[n-1]
    // n为数组的长度 Bk[n-1]=A[i]
    f += sum - len * A[i]
    res = Math.max(res, f)
  }
  return res
}
