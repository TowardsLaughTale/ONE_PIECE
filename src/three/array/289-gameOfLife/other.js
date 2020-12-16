/*
 * @Subject: 题目描述
    根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
    给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
    每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
    每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

    如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
    如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
    如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
    如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

    根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。
    下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

 * @Thought: 思路分析
    1、定义一个新数组，遍历原数组
    2、以遍历到的位置作为新数组的下标，根据规则，设置当前位置的状态值
    3、重新遍历数组，使用新数组一一赋值

 * @Complexity: 复杂度
    时间复杂度： O(mn)
    空间复杂度： O(mn)

 * @Result: 运行结果
    执行用时：80 ms, 在所有 JavaScript 提交中击败了83.33%的用户
    内存消耗：38 MB, 在所有 JavaScript 提交中击败了50.39%的用户
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let gameOfLife1 = function(board) {
    let newBoard = [], status_arr = [], m = board.length, n = board[0].length
    for (let r = 0; r < m; r++) {
        newBoard[r] = []
        for (let c = 0; c < n; c++) {
            status_arr = []
            // 左上 中上 右上
            if (r - 1 >= 0) {
                if (c - 1 >= 0) {
                    status_arr.push(board[r - 1][c - 1])
                }
                status_arr.push(board[r - 1][c])
                if (c + 1 < n) {
                    status_arr.push(board[r - 1][c + 1])
                }
            }
            // 左 右
            if (c - 1 >= 0) {
                status_arr.push(board[r][c - 1])
            }
            if (c + 1 < n) {
                status_arr.push(board[r][c + 1])
            }
            // 左下 中下 右下
            if (r + 1 < m) {
                if (c - 1 >= 0) {
                    status_arr.push(board[r + 1][c - 1])
                }
                status_arr.push(board[r + 1][c])
                if (c + 1 < n) {
                    status_arr.push(board[r + 1][c + 1])
                }
            }
            active = 0
            status_arr.forEach(s => {
                if (s === 1) {
                    active++
                }
            })
            if (board[r][c] === 1) {
                if (active < 2 || active > 3) {
                    // 改变
                    newBoard[r][c] = 0
                    // obj['r' + r + 'c' + c] = 0
                } else {
                    // 不变
                    newBoard[r][c] = 1
                    // obj['r' + r + 'c' + c] = 1
                }
            } else {
                if (active === 3) {
                    // 改变
                    newBoard[r][c] = 1
                    // obj['r' + r + 'c' + c] = 1
                } else {
                    // 不变
                    newBoard[r][c] = 0
                    // obj['r' + r + 'c' + c] = 0
                }
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            board[r][c] = newBoard[r][c]
        }        
    }
    return newBoard
}



/*
 * @Subject: 题目描述
    根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
    给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
    每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
    每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

    如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
    如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
    如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
    如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

    根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。
    下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

 * @Thought: 思路分析
    1、遍历数组
    2、遍历每一个元素时，计算当前元素周围元素活细胞的个数
    3、
        3、1 根据规则 1、3
        这里设置成 -1 ，对应上面的 Math.abs 取值，使得不影响上面判断活细胞的个数的逻辑
        代表之前是活的，现在要转变成死的。
        3、2 根据规则 4
        设置成 2 ，不影响上面判断活细胞的个数的逻辑
        代表之前是死的，现在要转变成活的。
    3、重新遍历数组，根据当前的数值 大于 0 的设置成 1，小于 0 的设置成 0

 * @Complexity: 复杂度
    时间复杂度： O(mn)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：80 ms, 在所有 JavaScript 提交中击败了83.33%的用户
    内存消耗：38.1 MB, 在所有 JavaScript 提交中击败了47.29%的用户
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let gameOfLife = function(board) {
    let m = board.length, n = board[0].length, active = 0, around = [0, 1, -1]
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            active = 0
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(around[i] === 0 && around[j] === 0)) {
                        // 当前位置相邻坐标
                        let ir = r + around[i]
                        let ic = c + around[j]
                        // 右   r + 0   c + 1
                        // 左   r + 0   c + -1
                        // 下   r + 1   c + 0
                        // 右下 r + 1   c + 1
                        // 左下 r + 1   c + -1
                        // 上   r + -1  c + 0
                        // 右上 r + -1  c + 1
                        // 左上 r + -1  c + -1

                        // 相邻细胞是否是活细胞
                        // 相邻坐标是否在数组中
                        // 当前位置值是否为 1，表示为活细胞
                        if ((ir < m && ir >= 0) && (ic < n && ic >= 0) && Math.abs(board[ir][ic]) === 1) {
                            active++
                        }
                    }
                }
            }
            // 规则 1 、 3
            if (board[r][c] === 1 && (active < 2 || active > 3)) {
                // 代表之前是活的，现在要转变成死的。
                // 这里设置成 -1 ，对应上面的 Math.abs 取值，使得不影响上面判断活细胞的个数的逻辑
                board[r][c] = -1
            }
            // 规则 4
            if (board[r][c] === 0 && active === 3) {
                // 代表之前是死的，现在要转变成活的。
                // 这里设置成 2 ，不影响上面判断活细胞的个数的逻辑
                board[r][c] = 2 
            }
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] > 0) {
                board[r][c] = 1
            } else {
                board[r][c] = 0
            }
        }
    }
    return board
}
let matrix = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ]
//   [
//     [0,0,0],
//     [1,0,1],
//     [0,1,1],
//     [0,1,0]
//   ]

let r = gameOfLife(matrix)
console.log('r :>> ', r)
