/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => {
    if (a < b){
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
  })


  let h = 0
  for (let x = 0;x < citations.length; x++) {
    const y = citations[x];
    const minXY = Math.min(x + 1, y)
    if (minXY > h) {
      h = minXY
    }
  }

  return h
};
// @lc code=end

