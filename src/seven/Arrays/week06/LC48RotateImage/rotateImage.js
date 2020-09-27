/**
 * @Thought For EVERY LAYER, each corner do rotate, top-left coordinate [pos1][pos1],lower right [pos2][pos2], each
 * corner move by certain offset, then do rotate four corners after done moving
 * https://leetcode-cn.com/problems/rotate-image/solution/li-kou-48xiao-bai-du-neng-kan-dong-de-fang-fa-zhu-/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;
    let pos1 = 0;
    let pos2 = len - 1;

    while(pos1 < pos2) {
        let offset = 0;
        while(pos1 + offset < pos2 ){
            //rotate 4 corners
            let tmp = matrix[pos2][pos2 - offset];
            matrix[pos2][pos2 - offset] = matrix[pos1 + offset][pos2];
            matrix[pos1 + offset][pos2] = matrix[pos1][pos1 + offset];
            matrix[pos1][pos1 + offset] = matrix[pos2 - offset][pos1];
            matrix[pos2 - offset][pos1] = tmp;
            offset ++ ;
        }
        pos1 ++ ;
        pos2 -- ;   
        
    }
    return matrix;
};
/**
 * FOR EVERY LAYER swich value along with upper left to lower right diagnal
 * 1. Change every matrix(i,j) to matrix(j,i)
 * 2. reverse every item in each subarray
 */
// var rotate = function(matrix) {
//     let len = matrix.length;
    
//     for( let i = 0; i < len - 1; i ++ ){
//         for( let j = i; j < len; j ++ ) {
//             let tmp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = tmp;
//         }
//     }
//     return matrix.map(v => v.reverse());
// };