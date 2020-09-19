/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) {
      return []
  }
  let iMin = 0, jMin = 0, iMax = matrix.length - 1, jMax = matrix[0].length - 1;
  const res = []
 
  let i = iMin;
  let j = jMin;
  while (iMin <= iMax && jMin <= jMax) { // 处理循环
      i = iMin;
      j = jMin;
      // 上 左到右遍历 
    while (j <= jMax) {
        res.push(matrix[i][j])
        j++;
    }
    iMin = iMin + 1;
    if (iMin <= iMax ) {

      // 右 上到下遍历
      i = iMin;
      j = jMax;
      while(i <= iMax) {
          res.push(matrix[i][j])
          i++;
      }
      jMax = jMax - 1;

      if (jMax >= jMin) {
          // 下 右到左
          i = iMax
          j = jMax
          while (j >= jMin) {
              res.push(matrix[i][j])
              j--;
          }
          iMax = iMax - 1;

          // 左 下到上
          i = iMax
          j = jMin
          while (i >= iMin) {
              res.push(matrix[i][j])
              i--
          }
          jMin = jMin + 1
      }
    }

  }


  return res;

};


// const r = spiralOrder([
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]])


/**
 * 最优解，人家写的逻辑清晰
 * @param [][] matrix 
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) {
        return [];
    }
    
    // 边界
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    // 方向
    let direction = 'right';

    let result = [];

    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
            direction = 'bottom';
        } else if (direction === 'bottom') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
            direction = 'left';
        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 'top';
        } else if (direction === 'top') {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
            direction = 'right';
        }
    }

    return result;
};
