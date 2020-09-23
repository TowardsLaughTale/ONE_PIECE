// 执行用时：116 ms, 在所有 JavaScript 提交中击败了85.87%的用户
// 内存消耗：43.3 MB, 在所有 JavaScript 提交中击败了40.66%的用户
let findDiagonalOrder = function (matrix) {
    if (!matrix || matrix.length === 0) return []
    let flag = true
    let res = [],
        iInit = 1, jInit = -1, iLast = matrix.length - 1, jLast = matrix[0].length - 1
    while(true) {
        if (flag) {
            if (iInit > 0 && jInit < jLast) {
                // 右上行
                --iInit
                ++jInit
                res.push(matrix[iInit][jInit])
                if (iInit === iLast && jInit === jLast) return res
            }

            
            if (iInit === 0 && jInit !== jLast) {
                // 向右进 1
                ++jInit
                res.push(matrix[iInit][jInit])
                flag = false
            } else if (jInit === jLast) {
                // 向下进 1
                ++iInit
                res.push(matrix[iInit][jInit])
                flag = false
            }
        } else {
            // 左下行
            if (iInit < iLast && jInit > 0) {
                ++iInit
                --jInit
                res.push(matrix[iInit][jInit])
                if (iInit === iLast && jInit === jLast) return res
            }


            if (jInit === 0 && iInit !== iLast) {
                // 向下进 1
                ++iInit
                res.push(matrix[iInit][jInit])
                flag = true
            } else if (iInit === iLast) {
                // 向右进 1
                ++jInit
                res.push(matrix[iInit][jInit])
                flag = true
            }
        }
        if (iInit === iLast && jInit === jLast) return res
    }
}