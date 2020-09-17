/**
 * @Thought: 1.首先设定上下左右边界
2、其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
3、判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
4、若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
5、不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案
 * @param {number[][]} matrix
 * @return {number[]}
 * @Time:O(n) 相当于每个点都遍历一遍
 * @Space:O(1):不算res数组的话没有额外空间
 */
var spiralOrder = function(matrix) {
    if(!matrix || matrix.length === 0) return []
    const row = matrix.length;
    const col = matrix[0].length;
    const res = [];
    let up = 0;
    let low = row - 1;
    let left = 0;
    let right = col - 1;
    while(true) {
        for(let i = left; i <= right; i ++ ){
            res.push(matrix[up][i]);
        }
        if(++ up > low) break;
        for(let j = up; j <= low; j ++ ){
            res.push(matrix[j][right]);
        }
        if(--right < left) break;
        for(let m = right; m >=left; m -- ){
            res.push(matrix[low][m]);
        }
        if(--low < up) break;
        for(let n = low; n >= up; n -- ){
            res.push(matrix[n][left]);
        }
        if(++left > right) break;
    }

    return res;
};