/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // 将数组从大到小排序，先取出第一个最大数，数组中可能有负数，所以分别乘以第二第三个，或者末尾的两个，取最大值
    let newNums = nums.sort((a,b)=>b-a)
    let maxNum = newNums[0];
    let num1 = maxNum*newNums[1]*newNums[2];
    let num2 = maxNum*nums[nums.length-1]*nums[nums.length-2]
    return Math.max(num1,num2)
};
console.log(maximumProduct([-2,5,3,-4,-1]))