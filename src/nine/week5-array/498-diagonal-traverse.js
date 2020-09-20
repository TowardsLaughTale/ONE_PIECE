/**
 * @Subject 498.  对角线遍历
 * 
  给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

  

  示例:

  输入:
  [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
  ]

  输出:  [1,2,4,7,5,3,6,8,9]

  解释:

  

  说明:

  给定矩阵中的元素总数不会超过 100000 。


 * @Thought 思路分析
  对角线有两个方向，右上或者左下，往右上时i -= 1,j += 1;左下时i += 1， j -= 1;
  然后判断边界值，上下左右四个边界，分别是0，n，0，m，在这四个边界内操作i和j，超出改变方向；

 * @Result 运行结果
  执行用时 80 ms, 在所有 JavaScript 提交中击败了63.15%的用户
  内存消耗：37.3  MB, 在所有 JavaScript 提交中击败了9.56%的用户

 * @author 王绍余
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if(matrix.length < 1) return [];
  let m = matrix[0].length ;
  let n = matrix.length;

  let i = 0, j = 0;
  let flag = true;
  let res = [];

  for(let a = 0; a < m * n; a++) {
      res.push(matrix[i][j]); // (0, 2)
      if(flag) {
        i -= 1; 
        j += 1; 
      } else {
        i += 1;
        j -= 1;
      }
      if(i < 0 || j < 0 || i === n || j === m) {
        if(flag) {
          if(j < m) i = 0; 
          else {
            i += 2;
            j --;
          }
        } else {
          if(i < n) j = 0;
          else {
            j += 2;
            i --;
          }
        }
        flag = !flag;
      }

  }
  return res;
};
console.log(findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]))