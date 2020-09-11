/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 * 执行结果：
 * 通过
 * 显示详情 执行用时： 152 ms , 在所有 JavaScript 提交中击败了 91.23% 的用户
 * 内存消耗：
 * 45.4 MB , 在所有 JavaScript 提交中击败了 40.63% 的用户
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const res = []
  const xLen = M.length
  for(let x = 0; x< M.length; x++) {
      const yLen = M[x].length
      for(let y=0; y<M[x].length; y++) {
          // 获取元素周围平均值
          const startX = Math.max(0, x -1), endX = Math.min(xLen, x + 2), startY = Math.max(0, y - 1), endY = Math.min(yLen, y + 2);
          let sum = 0,count=0
          for (let i = startX;i<endX; i++) {
              for(let j = startY;j<endY;j++) {
                  sum += M[i][j]
                  count++
              }
          }
          if (!res[x]) res[x] = []
          res[x][y] = Math.floor(sum/count)
      }
  }
  return res

};
// @lc code=end

