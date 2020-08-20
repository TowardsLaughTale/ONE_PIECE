/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let product = 1;
    if(nums.length <= 3) {//不足三个直接乘
        for(let num of nums){
            product *= num
        }
        return product;
    }
    const sorted = [...nums.sort((a,b)=>a-b)];
    let len = sorted.length;
    //判断三个数乘积最大的策略：俩负数最大加一个正数最大，或者三个正数最大
    return sorted[0] * sorted[1] * sorted[len - 1] > sorted[len - 1] * sorted[len - 2] * sorted[len - 3]? 
            sorted[0] * sorted[1] * sorted[len - 1] : 
            sorted[len - 1] * sorted[len - 2] * sorted[len - 3]
}



//======================================================================//
//此做法是数组所有数相乘最大乘积的做法，而题目要求数组中三个数的乘积最大
//何时最大？1. 乘积里面没有0。2. 乘积里面有如果有奇数个负数，把最大的负数挑出来
// var maximumProduct = function(nums) {
//     //数组先排序
//     //从头开始遍历一直到0，统计出负数的个数，并做累乘，如果负数个数是偶数那么只把0删除
//     //如果负数个数是奇数，那么把0和前面的一个数都删掉接着做累乘
//     nums.sort();
//     let sum = 1;
//     let negative_count = 0;
//     let prev_num = 0;
//     for(let i = 0; i < nums.length - 1; i ++ ){
//         if(nums[i] < 0){
//             negative_count ++ ;
//         } 
//         if(nums[i + 1] === 0){
//             if(negative_count % 2 !== 0){
//                 continue;
//             }
//         }
//         sum *= nums[i];
//     }
//     if(nums[nums.length - 1] > 0 || nums[nums.length - 1] < 0 && negative_count % 2 === 0){
//         sum *= nums[nums.length - 1];
//     }
//     return sum;
// };