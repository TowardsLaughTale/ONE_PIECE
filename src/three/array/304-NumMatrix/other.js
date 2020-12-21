/*
 * @Subject: 题目描述
    给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
    
 * @Thought: 思路分析
    暴力解法：遍历数组，依照给出的范围顺序累加

 * @Complexity: 复杂度
    时间复杂度： O(mn)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：224 ms, 在所有 JavaScript 提交中击败了20.55%的用户
    内存消耗：42.3 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix1 = function(matrix) {
    this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix1.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for (let r = row1; r <= row2; r++) {
        for (let c = col1; c <= col2; c++) {
            sum += this.matrix[r][c]
        }
    }
    return sum
}


/*
 * @Subject: 题目描述
    给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
    
 * @Thought: 思路分析
    缓存解法：预先计算每个 martix[i][j] 位置到零点 [0,0] 的总和 sum[i][j]
    sum[i][j] = sum[i-1][j] + sum[i][j-1]-sum[i-1][j-1]+matrix[i][j]

    后续根据给出的起始坐标与结束坐标，根据公式：
    part([r1][c1], [r2][c2]) = sum[r2][c2] - sum[r1-1][c2] - sum[r2][c1-1] + sum[r1-1][c1-1]

 * @Complexity: 复杂度
    时间复杂度： O(mn)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：104 ms, 在所有 JavaScript 提交中击败了98.63%的用户
    内存消耗：41.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
/**
 * @param {number[][]} matrix
 */
let NumMatrix = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return
    // let m = matrix.length, n = matrix[0].length // r,c
    let m = matrix.length + 1, n = matrix[0].length + 1 // r+1,c+1 
    // let m = matrix.length + 2, n = matrix[0].length + 2 // r+2,c+2
    this.sum = new Array(m).fill(0).map(() => new Array(n).fill(0))
    // console.log('this.sum :>> ', this.sum);
    for (let r = 0; r < m - 1; r++) { // r,c: m | r+1,c+1: m-1 | r+2,c+2: m-2
        for (let c = 0; c < n - 1; c++) { // r,c: n | r+1,c+1: n-1 | r+2,c+2: n-2
            // console.log('r :>> ', r, '|  c :>> ', c)

            // 这里有点不好理解
            // 1、this.sum是一个新二维数组
            // 2、是用来存储r，c位置距离0，0的总和
            // 3、所以this.sum[r+x][c+x] 代表 `r，c位置距离0，0的总和` 在新数组里面 `向右向下移动 x 位置` 
            // 但是它自己实际代表的意义不变，即 `r，c位置距离0，0的总和`，所以下面的算法，x可以增加，但是 matrix[r][c]下标不可增加
            // r,c
            // this.sum[r][c]= ((r - 1 >= 0) ? this.sum[r - 1][c] : 0) + ((c - 1 >= 0) ? this.sum[r][c - 1] : 0) - ((r - 1 >= 0 && c - 1>= 0) ? this.sum[r - 1][c - 1] : 0) + matrix[r][c]
            
            // r+1,c+1
            this.sum[r + 1][c + 1]= this.sum[r][c + 1] + this.sum[r + 1][c] - this.sum[r][c] + matrix[r][c]
            
            // r+2,c+2
            this.sum[r + 1][c + 1]= this.sum[r][c + 1] + this.sum[r + 1][c] - this.sum[r][c] + matrix[r][c]
            // console.log('process this.sum :>> ', this.sum);
        }
    }
    // console.log('after this.sum :>> ', this.sum);
}
/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    // 公式：
    // r,c
    // part([r1][c1], [r2][c2]) = sum[r2][c2] - sum[r1-1][c2] - sum[r2][c1-1] + sum[r1-1][c1-1]

    // r,c
    // return this.sum[row2][col2] - this.sum[row1 - 1][col2] - this.sum[row2][col1 - 1] + this.sum[row1 - 1][col1 - 1]
    
    // r+1,c+1
    return this.sum[row2+1][col2+1] - this.sum[row1][col2+1] - this.sum[row2+1][col1] + this.sum[row1][col1]
    
    // r+2,c+2
    // return this.sum[row2+2][col2+2] - this.sum[row1+1][col2+2] - this.sum[row2+2][col1+1] + this.sum[row1+1][col1+1]
}

// 设sum[i][j]表示从(0,0)到(i,j)形成的矩形内的元素之和。
// 递推关系：
// sum[i][j] = sum[i-1][j] + sum[i][j-1]-sum[i-1][j-1]+matrix[i][j];
// sum[3][3]的元素之和 
// [
//     ['3', '0', '1', '4', 2],
//     ['5', '6', '3', '2', 1],
//     ['1', '2', '0', '1', 5],
//     ['4', '1', '0', '1', 7],
//     [ 1,   0,   3,   0,  5]
// ]
// =
// sum[i-1][j]:
// [
//     ['3', '0', '1', '4', 2],
//     ['5', '6', '3', '2', 1],
//     ['1', '2', '0', '1', 5],
//     [ 4,   1,   0,   1,  7],
//     [ 1,   0,   3,   0,  5]
// ]
// +
// sum[i][j-1]:
// [
//     ['3', '0', '1',  4,  2],
//     ['5', '6', '3',  2,  1],
//     ['1', '2', '0',  1,  5],
//     ['4', '1', '0',  1,  7],
//     [ 1,   0,   3,   0,  5]
// ]
// -
// sum[i-1][j-1]:
// [
//     ['3', '0', '1',  4,  2],
//     ['5', '6', '3',  2,  1],
//     ['1', '2', '0',  1,  5],
//     [ 4,   1,   0,   1,  7],
//     [ 1,   0,   3,   0,  5]
// ]
// +
// matrix[i][j]:
// [
//     [ 3,   0,   1,   4,  2],
//     [ 5,   6,   3,   2,  1],
//     [ 1,   2,   0,   1,  5],
//     [ 4,   1,   0,  '1', 7],
//     [ 1,   0,   3,   0,  5]
// ]


// 局部矩阵面积等于：

// part([r1,c1], [r2,c2]) = sum[r2, c2] -  sum[r1-1][c2] - sum[r2][c1-1] + sum[r1-1][c1-1]

// part([2,2], [3,3])的局部矩阵和
// [
//     [ 3,   0,   1,   4,  2],
//     [ 5,   6,   3,   2,  1],
//     [ 1,   2,  '0', '1', 5],
//     [ 4,   1,  '0', '1', 7],
//     [ 1,   0,   3,   0,  5]
// ]
// =
// sum[r2, c2]:
// [
//     ['3', '0', '1', '4', 2],
//     ['5', '6', '3', '2', 1],
//     ['1', '2', '0', '1', 5],
//     ['4', '1', '0', '1', 7],
//     [ 1,   0,   3,   0,  5]
// ]
// -
// sum[r1-1][c2]:
// [
//     ['3', '0', '1', '4', 2],
//     ['5', '6', '3', '2', 1],
//     [ 1,   2,   0,   1,  5],
//     [ 4,   1,   0,   1,  7],
//     [ 1,   0,   3,   0,  5]
// ]
// -
// sum[r2][c-1]:
// [
//     ['3', '0',  1,   4,  2],
//     ['5', '6',  3,   2,  1],
//     ['1', '2',  0,   1,  5],
//     ['4', '1',  0,   1,  7],
//     [ 1,   0,   3,   0,  5]
// ]
// +
// sum[r1-1][c1-1]:
// [
//     ['3', '0',  1,   4,  2],
//     ['5', '6',  3,   2,  1],
//     [ 1,   2,   0,   1,  5],
//     [ 4,   1,   0,   1,  7],
//     [ 1,   0,   3,   0,  5]
// ]






let matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ];

// r,c
// [
//     [ 3, 3, 4, 8, 10 ],
//     [ 8, 14, 18, 24, 27 ],
//     [ 9, 17, 21, 28, 36 ],
//     [ 13, 22, 26, 34, 49 ],
//     [ 14, 23, 30, 38, 58 ]
// ]

// r+1,c+1
// [
//     [ 0, 0, 0, 0, 0, 0 ],
//     [ 0, 3, 3, 4, 8, 10 ],
//     [ 0, 8, 14, 18, 24, 27 ],
//     [ 0, 9, 17, 21, 28, 36 ],
//     [ 0, 13, 22, 26, 34, 49 ],
//     [ 0, 14, 23, 30, 38, 58 ]
// ]

// r+2,c+2
// ;[
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 3, 3, 4, 8, 10],
//     [0, 0, 8, 14, 18, 24, 27],
//     [0, 0, 9, 17, 21, 28, 36],
//     [0, 0, 13, 22, 26, 34, 49],
//     [0, 0, 14, 23, 30, 38, 58],
// ]
// let matrix = [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1]
//   ]
//   [
//     [1, 2, 3, 4, 5],
//     [2, 4, 6, 8, 10],
//     [3, 6, 9, 12, 15],
//     [4, 8, 12, 16, 20],
//     [5, 10, 15, 20, 25]
//   ]

  
let r = new NumMatrix(matrix)
 let x = r.sumRegion(2, 1, 4, 3) //-> 8
//  let x = r.sumRegion(1, 1, 2, 2) //-> 11
//  let x = r.sumRegion(1, 2, 2, 4) //-> 12
 console.log(x)
// console.log(r)