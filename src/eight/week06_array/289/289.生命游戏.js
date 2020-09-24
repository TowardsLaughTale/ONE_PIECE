/*
 * @Subject: 题目描述
    289. 生命游戏
    根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
    给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
    如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
    如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
    如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
    如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
    根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
    示例：
    输入： 
    [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
    ]
    输出：
    [
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]
    ]    
    进阶：
    你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
    本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
 * @Thought: 思路分析
    
 * @Complexity: 复杂度
    时间复杂度：O(n*m) 遍历两遍数组
    空间复杂度：O(1) 不使用额外空间
 * @Result: 运行结果
    23 / 23 个通过测试用例
    状态：通过
    执行用时: 100 ms
    内存消耗: 38.8 MB
 * @Author: eight
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const [row, col] = [board.length, board[0].length];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (k >= 0 && k < row && l >= 0 && l < col) {
            if (!(k === i && l === j) && board[k][l] % 10 === 1) {
              count++;
            }
          }
        }
      }
      console.log(count);
      if (board[i][j] === 0) {
        if (count === 3) {
          board[i][j] += 10;
        }
      } else {
        if (count < 2 || count > 3) {
          board[i][j] += 10;
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 10) {
        board[i][j] = 1;
      } else if (board[i][j] === 11) {
        board[i][j] = 0;
      }
    }
  }
  console.log(board);
  return board;
};

const mat = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

gameOfLife(mat);
