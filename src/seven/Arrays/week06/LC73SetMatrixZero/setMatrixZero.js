/**
 * @Thoght I SOLVED the PROBLEM ALL BY MYSELF! YEAH!! Inspired by LC 41, also used in-place hasing
 * In-place hashing, change every element which is same row and column with 0 to JS max number,
 * then traverse the matrix again, change every number which is eqaul to  max js number to zero
 * P.S.: add two flag variables for optimization in case duplicate traversal if multiple zeros in
 * same row or column
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
        if(!matrix || matrix.length === 0) return [];
        const row = matrix.length;
        const col = matrix[0].length;
        const NUM = Number.MAX_SAFE_INTEGER;
        let rowVisited = false;
        let colVisited = false;
        for( let i = 0; i < row; i ++ ){
            rowVisited = false;
            for( let j = 0; j < col; j ++  ){
                colVisited = false;
                if(matrix[i][j] === 0 ) {
                    if(!rowVisited){//if row not marked, then do marking
                        for( let m = 0; m < col; m ++ ){
                            if(matrix[i][m] !== 0 && matrix[i][m] !== NUM){
                                matrix[i][m] =  NUM;
                            }
                        }
                        rowVisited = true;
                    }
                    if(!colVisited){//if col not marked, then do marking
                        for( let n = 0; n < row; n ++ ){
                            if(matrix[n][j] !== 0 && matrix[n][j] !== NUM){
                                matrix[n][j] = NUM;
                            }
                        }
                        colVisited = true;
                    }
                }
            }
        }
        for( let k = 0; k < row; k ++ ){
            for( let l = 0; l < col; l ++  ){
                if(matrix[k][l] === NUM){
                    matrix[k][l] = 0;
                }
            }
        }
        return matrix;
    
    };