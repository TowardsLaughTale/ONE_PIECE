/**
 * [1,2,3,4,5,6,7], k = 3
 * @Thought 先reverse 整个数组变成[7,6,5,4,3,2,1],再reverse前k个数，[5,6,7,4,3,2,1],最后再reverse剩下的数
 * @Time O(n)
 * @Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //Wrong understanding
    // let step = nums.length - k;
    // if(k > nums.length) step = nums.length - 1;
    // const arr = nums.splice(0,step)
    // arr.forEach(val => nums.push(val))
    k = k % nums.length;
    reverse(nums,0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1)
};
var reverse = function( nums, s, e ) {
    while(s < e){
        let tmp = nums[s];
        nums[s] = nums[e];
        nums[e] = tmp;
        s ++ ;
        e -- ;
    }
}