/**
 * @Thought:取每个range的交集的matrix就是乘积最大的，因为是交集，所以求的时候长和宽都是最小的
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 * @Time: O(k) , k < n
 * @Space: O(1)
 */
var maxCount = function(m, n, ops) {
    for(let op of ops){
        m = Math.min(m, op[0]);
        n = Math.min(n, op[1]);
    }
    return m * n
};