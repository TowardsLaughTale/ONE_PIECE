/**
 * @Thought Refactored code comparing to LC54; Since this one didn't provide an array,
 * need to keep track of a count variable that increaments along with the traversal of 
 * the matrix
 * @Time O(n), every node is traversed
 * @Space O(1), no extra space
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n).fill(0).map((v,i) => new Array(n).fill(0));//new Array creates an array with "empty slots" which doesn't hold valid values, so in order for map to work , have to fill the array with actual values first, then call map to change these values
    const directions = {
        up: 0,
        low: n - 1,
        left:0,
        right: n - 1
    }
    let count = 1;
    while(true){
        for( let i = directions.left; i <= directions.right; i ++ ) {
            res[directions.up][i]= count ++ ;
        }

        if(++ directions.up > directions.low) break;
        for( let j = directions.up; j <= directions.low; j ++ ) {
            res[j][directions.right] = count ++ ;
        }

        if(-- directions.right < directions.left) break;
        for( let m = directions.right; m >=directions.left; m -- ){
            res[directions.low][m] = count ++ ;
        }

        if(-- directions.low < directions.up) break;
        for( let n = directions.low; n >=directions.up; n -- ){
            res[n][directions.left] = count ++ ;
        }
        if(++ directions.left > directions.right )break;
    }
    return res;
};