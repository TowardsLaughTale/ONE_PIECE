// 转一圈下来

// 矩阵第一排元素去掉
// 矩阵最后一排元素去掉
// 即 iInit + 1, ilast - 1

// 矩阵第一列去掉
// 矩阵最后一列去掉
// 即 jInit + 1, jLast - 1

// 执行用时：76 ms, 在所有 JavaScript 提交中击败了70.17%的用户
// 内存消耗：37 MB, 在所有 JavaScript 提交中击败了10.05%的用户
let spiralOrder = function (matrix) {
    if (!matrix || matrix.length === 0 ) return []
    let res = []
    let iInit = 0, iLast = matrix.length - 1, jInit = 0, jLast = matrix[0].length - 1
    while(true) {
        // 最上一行，固定行，遍历列
        if (jInit <= jLast) {
            for (let j = jInit; j <= jLast; j++) {
                res.push(matrix[iInit][j])
            }
            // 最顶该行收集完成，行初始下标 进 1
            iInit++
        } else {
            break
        }


        // 最右一列，固定列，遍历行
        if (iInit <= iLast) {
            for (let i = iInit; i <= iLast; i++) {
                res.push(matrix[i][jLast])
            }
            // 最右列收集完成，列末尾下标 减 1
            jLast--
        } else {
            break
        }


        // 最底一行，固定行，遍历列
        if (jInit <= jLast) {
            for (let j = jLast; j >= jInit; j--) {
                res.push(matrix[iLast][j])
            }
            // 最底该行收集完成，行末尾下标 减 1
            iLast--
        } else {
            break
        }

        // 最左一列，固定列，遍历行
        if (iInit <= iLast) {
            for (let i = iLast; i >= iInit; i--) {
                res.push(matrix[i][jInit])
            }
            // 最左列收集完成，列初始下标 加 1
            jInit++
        } else {
            break
        }
    }
    return res
}
// let matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//    ]

let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
let r = spiralOrder(matrix)
console.log('r :>> ', r)