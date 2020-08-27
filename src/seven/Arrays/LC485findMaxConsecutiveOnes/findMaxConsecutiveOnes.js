/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let res = 0;
    for(let i = 0; i < nums.length; i ++ ){
        if(nums[i] === 0) count = 0;
        else{
            count ++ ;
            res = Math.max(res, count);
        }
    }
    return res;
};