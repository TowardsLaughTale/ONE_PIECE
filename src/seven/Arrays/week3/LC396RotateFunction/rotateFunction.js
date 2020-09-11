/**
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

 * @Thought: 4,3,2,6--->6,4,3,2--->2,6,4,3--->3,2,6,4
 * 从F(0)->F(1):
 * 4,3,2,6  -->  6,4,3,2 用值乘index
 * 0,1,2,3  -->  0,1,2,3
 * F(1)相当于比F(0)每一位都多了A[i]以及最后一位多了6*3 也就算A[i] * (n -1)
 * 加起来就是F(0)=F(1)+(sum-A[i+1])-(n-1)* A[i+1] = F(1) + sum - n * A[i + 1]
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    let res = 0, sum = 0,tmp = 0, len = A.length;
    if(len ==0 || len == 1) return 0;
    sum = A.reduce((acc,val,i) => {
        return acc + val;
    } ,0);
    for(let i = 0; i < len; i ++ ) {
        tmp += i * A[i];
    }
    res = tmp;
    for(let j = len - 2; j >= 0; j -- ) {
        tmp += (sum-len * A[j+1]);
        res=Math.max(tmp,res);
    }
    return res;
};