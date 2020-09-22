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