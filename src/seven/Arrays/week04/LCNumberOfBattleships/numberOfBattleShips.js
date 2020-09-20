/**
 * @Thought: 当遇到X时，如果左边和右边是.或者空的不存在，则它是头部，加1，不然略过，但是这样做边角条件略麻烦
 * 所以反过来想，如果左方和上方是X，跳过就好，不然加1
 * @param {character[][]} board
 * @return {number}
 * @Time: O(n^2)
 * @Space: O(1)
 */
var countBattleships = function(board) {
    let res = 0;
    for(let i = 0; i < board.length; i ++ ) {
        for(let j = 0; j < board[0].length; j ++ ) {
            let count = 0;
            if(board[i][j] == 'X') {
                if(i > 0 && board[i - 1][j] == 'X' || j > 0 && board[i][j - 1] == 'X') continue;
                res += 1;
            }
        }
    }
    return res;
};