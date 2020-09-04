/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => {
    return a - b
  })
  // 线性扫描找出最大的 i
  // 画出直方图，最大的正方形边长就是h指数
  // 最大的满足citations[i]>i的值
  let i = 0
  while (i < citations.length && citations[citations.length - 1 - i] > i) {
    i++
  }
  return i
}
