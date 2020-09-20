/**
 * @param {character[][]} board
 * @return {number}
 */
// ...X
// XXXX
// ...X
// 上面和左面不能为X
var countBattleships = function (board) {
  let count = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'X') {
        let isShip = true
        if (i != 0) {
          if (board[i - 1][j] == 'X') {
            isShip = false
          }
        }
        if (j != 0) {
          if (board[i][j - 1] == 'X') {
            isShip = false
          }
        }
        if (isShip) {
          count++
        }
      }
    }
  }
  return count
}
