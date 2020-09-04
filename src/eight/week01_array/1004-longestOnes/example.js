/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let start = 0;
  let end = 0;
  let max = 0;
  let zeroCount = 0;
  while (end < A.length) {
    if (zeroCount <= K) {
      zeroCount += 1 - A[end];
      end++;
    } else {
      zeroCount -= 1 - A[start];
      start++;
    }
    if (end - start > max && zeroCount <= K) {
      max = end - start;
    }
  }
  return max;
};
