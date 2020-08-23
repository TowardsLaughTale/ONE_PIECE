/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let res = 0;
    let count =0;
    let l = 0;
    // 利用窗口宽度来算最大数，l是左边界，r是有边界
    for(let r = 0; r < A.length; r++) {
        if(A[r] === 1) {
            count++;
        }
        while (r - l + 1 - count > K) {
            if(A[l] === 1) {
                count--;
            }
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
