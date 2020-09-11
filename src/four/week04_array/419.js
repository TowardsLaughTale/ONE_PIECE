/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 * 执行用时：
84 ms
, 在所有 JavaScript 提交中击败了
54.74%
的用户
内存消耗：
38.4 MB
, 在所有 JavaScript 提交中击败了
29.79%
的用户
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {

  let count = 0;
  for (let i = 0;i< board.length;i++) {
      for(let j=0;j<board[i].length;j++) {
          if (board[i][j] == '.') continue
          if (i > 0 && board[i - 1][j] == 'X') continue
          if (j > 0 && board[i][j - 1] == 'X') continue
          count++
      }
  }
  return count;

};
// @lc code=end

