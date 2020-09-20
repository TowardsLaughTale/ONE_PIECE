/**
 * @Subject 54. 螺旋矩阵  
 * 
  给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

  示例 1:

  输入:
  [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
  ]
  输出: [1,2,3,6,9,8,7,4,5]
  示例 2:

  输入:
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  输出: [1,2,3,4,8,12,11,10,9,5,6,7]

 * @Thought 思路分析
  逆时针旋转即右→下→左→上→右这样运动，给这四个方向上的运动设置边界值，到达边界值后改变方向，同时改变边界值；

 * @Result 运行结果
  执行用时 76 ms, 在所有 JavaScript 提交中击败了69.86%的用户
  内存消耗：37.1  MB, 在所有 JavaScript 提交中击败了5.74%的用户

 * @author 王绍余
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];
  let i = 0;
  let j = 0;
  let m = matrix[0].length - 1;
  let n = matrix.length - 1;
  if (n < 0) return [];
  let b = (m == 0) ? 'd' : 'r';
  let boundL = 0;
  let boundR = m;
  let boundU = 0;
  let boundD = n;

  for(let a = 0; a < (m + 1) * (n + 1); a++) {
    res.push(matrix[i][j]);
    if(b === 'r') {
      j ++;
      if (j === boundR) {
        boundU++;
        b = 'd';
      }
    } else if(b === 'd') {
      i ++;
        if(i === boundD){
          boundR--;
          b = 'l';
        }
        
    } else if(b === 'l') {
      j --;
      if(j === boundL) {
        boundD--;
        b = 'u';
      }
    } else if (b === 'u') {
      i--
      if (i === boundU) {
        boundL++;
        b = 'r';
      }
    }
  }
  return res;
};

console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]))