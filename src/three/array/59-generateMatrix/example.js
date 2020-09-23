// 执行用时：72 ms, 在所有 JavaScript 提交中击败了85.10%的用户
// 内存消耗：37.2 MB, 在所有 JavaScript 提交中击败了23.05%的用户
let generateMatrix = function (n) {
    let res = new Array(n).join().split(',').map(() => new Array(n).fill(0)),
        count = 0,
        iInit = jInit = 0, iLast = jLast = n - 1
    while(true) {
        // 最上一行，固定行，遍历列
        if (jInit <= jLast) {
            for (let j = jInit; j <= jLast; j++) {
                res[iInit][j] = ++count
            }
            // 最顶该行设置完成，行初始下标 进 1
            iInit++
        } else {
            break
        }


        // 最右一列，固定列，遍历行
        if (iInit <= iLast) {
            for (let i = iInit; i <= iLast; i++) {
                res[i][jLast] = ++count
            }
            // 最右列设置完成，列末尾下标 减 1
            jLast--
        } else {
            break
        }


        // 最底一行，固定行，遍历列
        if (jInit <= jLast) {
            for (let j = jLast; j >= jInit; j--) {
                res[iLast][j] = ++count
            }
            // 最底该行设置完成，行末尾下标 减 1
            iLast--
        } else {
            break
        }

        // 最左一列，固定列，遍历行
        if (iInit <= iLast) {
            for (let i = iLast; i >= iInit; i--) {
                res[i][jInit] = ++count
            }
            // 最左列设置完成，列初始下标 加 1
            jInit++
        } else {
            break
        }
    }
    return res
}