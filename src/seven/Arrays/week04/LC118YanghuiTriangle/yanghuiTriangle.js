/**
 * @Thought: 双重循环，每一层数组第一个值固定是1，最后一个值也是1，其他情况的值由当前值加下一个值计算出，每一层计算后将得出的那一层数组放入结果
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //If no other numbers on the left or right, valueNextRow = current + 0
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    let curr  = [1];
    const res = [];
    res.push(curr);
    for(let i = 0; i < numRows - 1; i ++ ){
        let next = [1];//first value is always 1
        for( let j = 0; j < curr.length; j ++ ){
            if(j === curr.length - 1){
                next[j + 1] = curr[j] + 0;//last value is always same
                break;
            }else{
                next[j + 1] = curr[j] + curr[j + 1];//starting from second value of next[] array,it equals to sum of previous array's curr value and its next value + 1
            }
        }
        curr  =  next;
        res.push(next);
    }
    return res;
};