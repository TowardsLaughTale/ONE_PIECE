// 思路：
// 题目意思是每个 X 的周围都必须是 . 才能算作一个计数
// 通过遍历二维数组，判断当前点为 X 的周围是否都是 . ，则计数 + 1

// 反过来说，若
// 1、当前点不是 X，则跳过
// 2、当前点的左边为 X，则不计数，跳过
// 3、当前点的上边为 X，则不计数，跳过
// 其他情况都计数

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了95.76%的用户
// 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了17.57%的用户
let countBattleships = function (board) {
    let count = 0
    // 遍历行
    for (let i = 0; i < board.length; i++) {
        // 遍历列
        for (let j = 0; j < board[0].length; j++) {
            // 若不等于 X 自动忽略
            if (board[i][j] !== 'X') {
                continue
            }
            // 当前点的左边
            if (i > 0 && board[i - 1][j] === 'X') {
                continue
            }
            // 当前点的上边
            if (j > 0 && board[i][j - 1] === 'X') {
                continue
            }
            count++
        }
    }
    return count
}
let board = [
    ['X', '.', 'X'],
    ['.', 'X', '.'],
    ['.', '.', 'X'],
    ['.', 'X', '.'],
]
let r = countBattleships(board)
console.log('r :>> ', r)