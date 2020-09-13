/**
 * @Thought: 相比于LC118，改进是内层循环倒着来更新数组，这样不用担心覆盖前面的值以及增加中间变量
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    for(let i = 1; i <= rowIndex; i ++ ){
        for( let j = i - 1; j > 0; j -- ) {
            res[j] = res[j - 1] + res[j];
        }
        res.push(1)
    }
    return res;
};