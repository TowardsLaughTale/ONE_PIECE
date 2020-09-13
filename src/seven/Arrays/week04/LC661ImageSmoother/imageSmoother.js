/**
 * @Thought: 每个点都找一遍，每个点的周围所有方向拿出来求和然后除以点的个数
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let row = M.length;
    let col = M[0].length;

    const res = new Array(row).fill(0).map(() => new Array(col).fill(0));
    console.log(res)
    let dirX = [-1, 0, 1];
    let dirY = [-1, 0, 1];
    for(let i = 0; i < row; i ++ ) {
        for(let j = 0; j < col; j ++ ) {
            let count = 0;
            for(let m of dirX) {
                for(let n of dirY) {
                    let nextX = i + m;
                    let nextY = j + n;
                    if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col) {
                        count ++ ;
                        res[i][j] += M[nextX][nextY];
                    }
                }
            }
            res[i][j] = Math.floor(res[i][j] / count)
        }
    }
    return res;

}