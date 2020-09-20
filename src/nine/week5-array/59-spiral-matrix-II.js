/**
 * @Subject 59.  螺旋矩阵 II
 * 
  给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

  示例:

  输入: 3
  输出:
  [
  [ 1, 2, 3 ],
  [ 8, 9, 4 ],
  [ 7, 6, 5 ]
  ]


 * @Thought 思路分析
  逆时针旋转即右→下→左→上→右这样运动，给这四个方向上的运动设置边界值，到达边界值后改变方向，同时改变边界值；

 * @Result 运行结果
  执行用时 80 ms, 在所有 JavaScript 提交中击败了63.15%的用户
  内存消耗：37.3  MB, 在所有 JavaScript 提交中击败了9.56%的用户

 * @author 王绍余
 */


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = [];
  for(let e = 0; e < n; e++) {
    res[e] = [];
  }
  let i = 0;
  let j = 0;

  let boundL = 0;
  let boundR = n - 1;
  let boundU = 0;
  let boundD = n - 1;
  let b = 'r';
  let count = 0
  for(let a = 1; a <= n * n; a++) {
    res[i][j]=++count;
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

console.log(generateMatrix(3));