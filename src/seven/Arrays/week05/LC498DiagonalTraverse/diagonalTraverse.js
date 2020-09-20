/**
 * @Thought Simulation and change coordinates with certain pattern , mind don't mix coordinates x and y axis and array 2-D index together
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(!matrix || matrix.length === 0) return [];
    const res = [];
    const row = matrix.length;
    const col = matrix[0].length;
    if( col === 1) {
        res.push(...matrix)
        return res;
    }

    let x = 0;
    let  y = 0;
    let flag = 'down';
    while(res.length < row * col) {
            res.push(matrix[x][y]);
            if(x === 0 && y === 0) {
                y ++ ;
                continue;
            }
            if( y !== 0  && x !== row - 1 && flag == 'down') {
                x ++ ;
                y -- ;
                continue;
            }else if(x !== 0 && y !== col - 1 && flag == 'up') {
                y ++ ;
                x -- ;
                continue;
            }
            if( y === 0 || x === row - 1 ){
                if(x === row - 1) y ++ ;
                else x ++ ;
                flag = flag == 'down' ? 'up' : flag;
            }else if( x === 0 || y === col - 1) {
                if(y === col - 1) x ++ ;
                else y ++ ;
                flag = flag == 'up' ? 'down' : flag;
            } 
    }
    return res;

};