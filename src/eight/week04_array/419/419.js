/*
 * @Subject: 题目描述
    419. 甲板上的战舰
    给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：
    给你一个有效的甲板，仅由战舰或者空位组成。
    战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。
    两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。
    示例 :
        X..X
        ...X
        ...X
    在上面的甲板中有2艘战舰。

    无效样例 :
        ...X
        XXXX
        ...X
    你不会收到这样的无效甲板 - 因为战舰之间至少会有一个空位将它们分开。

    进阶:
        你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？
 * @Thought: 思路分析
    1. 搜索每一行，找出水平的所有的结果，同时统计只有一个点的结果
    2. 搜索每一列，找出垂直的所有的结果。
 * @Complexity: 复杂度
    时间复杂度：O(n^2) 需要遍历全部数组
    空间复杂度：O(1) 仅仅使用count统计各种结果的个数
 * @Result: 运行结果
    28 / 28 个通过测试用例
    状态：通过
    执行用时: 84 ms
    内存消耗: 39 MB
 * @Author: eight
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let columnCount = 0;
  let rowCount = 0;
  let dotCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let cur = 0; cur < board[i].length; cur++) {
      let temp = board[i][cur];
      if (temp === "X") {
        if (i - 1 >= 0 && board[i - 1][cur] === "X") {
          continue;
        }
        if (i + 1 < board.length && board[i + 1][cur] === "X") {
          continue;
        }
        if (cur + 1 === board[i].length || board[i][cur + 1] !== "X") {
          dotCount++;
          continue;
        }
        rowCount++;
        while (++cur < board[i].length && board[i][cur] === "X") {}
      }
    }
  }
  for (let i = 0; i < board[0].length; i++) {
    for (let cur = 0; cur < board.length; cur++) {
      let temp = board[cur][i];
      if (temp === "X") {
        if (i - 1 >= 0 && board[cur][i - 1] === "X") {
          continue;
        }
        if (i + 1 < board.length && board[cur][i + 1] === "X") {
          continue;
        }
        if (cur + 1 === board.length || board[cur + 1][i] !== "X") {
          continue;
        }
        columnCount++;
        while (++cur < board.length && board[cur][i] === "X") {}
      }
    }
  }
  return rowCount + columnCount + dotCount;
};

let arr = [
  ["X", "", "", "X"],
  ["", "", " ", "X"],
  ["", "", "", "X"],
];

let res = countBattleships(arr);
console.log(res);
