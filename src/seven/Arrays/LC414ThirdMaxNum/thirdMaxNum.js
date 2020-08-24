/**
 * @param {number[]} nums
 * @return {number}
 */
const sort = (nums) => (nums.sort((a,b) => a - b))
var thirdMax = function(nums) {//先用set去重，维护一个sorted且只有三个元素的数组，最后返回第三个，如果长度不够直接返回最大
    const new_nums = [...new Set(nums)];
    if(new_nums.length < 3) return sort(new_nums)[new_nums.length - 1];
    let q = sort([new_nums[0],new_nums[1],new_nums[2]]);
    for(let i = 3; i < new_nums.length; i ++ ){
        q.push(new_nums[i])
        sort(q);
        q.shift();
    }
    return q[0];
}
//=====================================//
let MIN = Number.MIN_SAFE_INTEGER;
var thirdMax2 = function(nums) {
    let max = nums[0];
    let mid = MIN;
    let min = MIN;
    for(let i = 1; i < nums.length; i ++ ){
        if(nums[i] > max){
            min = mid;
            mid = max;
            max = nums[i];
        }else if(nums[i] > mid && nums[i] < max){
            min = mid;
            mid = nums[i];
        }else if(nums[i] > min && nums[i] < mid){
            min = nums[i];
        }
    }
    if(min === MIN) return max;//没有第三大的
    return min;
}