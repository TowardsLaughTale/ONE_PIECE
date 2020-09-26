/**
 * @Thought Brute force double loop
 * @Time O(N^2)
 * @Space O(1) , 不需要tmp数组放每一行的结果，直接按坐标存储
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const row = nums.length;
    const col = nums[0].length;
    if(r < 0 || c < 0 || r * c !== row * col) return nums;

    //row traversing
    const res = [...new Array(r)].map(() => new Array(c));
    let tmp = [];
    let h = 0;
    let s = 0;
    let count = 0;
    for(let i = 0; i < row; i ++ ) {
        for(let j = 0; j < col; j ++ ) {
            // res[h][s] = nums[i][j];
            // s ++ ;
            // if(s === c) {
            //     h ++ ;
            //     s = 0;
            // }
            res[count % r][count % c] = nums[i][j];
        }
    }
    return res;
};