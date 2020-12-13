// 0,0 使用 2,0 替换，但是 0,0 要提前保留下来
// 0,1 使用 1,0 替换，但是 0,1 要提前保留下来
// 0,2 使用 0,0 替换，但是 0,2 要提前保留下来
// ...
// 提前定义个变量对象 s 
// 1、在开始替换时，遇到当前要替换的数组元素，就将该数组元素存储在 对象 s 中
// 之后再使用旋转的元素占位
// 2、如此循环，中间如果有要用到之前被替换的元素时，根据 s 中保留的索引去取值

// matrix[r + 0][0] = matrix[2][c + 0]
// matrix[r + 0][1] = matrix[1][c + 0]
// matrix[r + 0][2] = matrix[0][c + 0]

// matrix[r + 1][0] = matrix[2][c + 1]
// matrix[r + 1][1] = matrix[1][c + 1]
// matrix[r + 1][2] = matrix[0][c + 1]

// matrix[r + 2][0] = matrix[2][c + 2]
// matrix[r + 2][1] = matrix[1][c + 2]
// matrix[r + 2][2] = matrix[0][c + 2]

// 执行用时：80 ms, 在所有 JavaScript 提交中击败了81.03%的用户
// 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了9.25%的用户
let rotate = function (matrix) {
    let c = 0,
        n = matrix.length - 1,
        s = {}
    for (let r = 0; r <= n; r++) {
        for (let j = 0, k = n; j <= n; j++, k--) {
            if (s['r' + r + 'c' + j] || s['r' + r + 'c' + j] === 0) {
                matrix[r][j] = s['' + r + j]
            } else {
                s['r' + r + 'c' + j] = matrix[r][j]
                if (s['r' + k + 'c' + c] || s['r' + k + 'c' + c] === 0) {
                    matrix[r][j] = s['r' + k + 'c' + c]
                } else {
                    matrix[r][j] = matrix[k][c]
                }
            }
        }
        c++
    }
    return matrix
}


// 沿左上角到右下角对角线置换矩阵
// 翻转每一行

// 执行用时：68 ms, 在所有 JavaScript 提交中击败了98.85%的用户
// 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了40.90%的用户
let rotate = function (matrix) {
    let n = matrix[0].length, tmp
    // 沿左上角到右下角对角线置换矩阵
    // 每置换一次外循环，则内循环需要前进一层，所以需要 j = i 为起始点
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            tmp = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = tmp
        }
    }
    return matrix
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
let r = rotate(matrix)
console.log('r :>> ', r)
