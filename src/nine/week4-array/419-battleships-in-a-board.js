/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;
  for(let i = 0; i < board.length; i ++) {
      for( let j = 0; j < board[0].length; j ++) {
          if(board[i][j] === 'X') {
              count ++;
              if(j - 1 >= 0 && board[i][j -1] === 'X') {
                  count --;
              }
              if(i - 1 >= 0 && board[i - 1][j] === 'X') {
                  count--
              }
          }
      }
  }
  return count;
};