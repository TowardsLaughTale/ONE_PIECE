/**
 * @Thought 双指针one pass, 利用快排思想，以0作为pivot，不等于0的在右边，等于0的置换到左边
 * 循环数组，指针i一直往前走，1.如果遇到i的值是0而j的不是，那么置换，置换后向前移动j by 1；
 * 2.如果j的值不是0那么将j往前移动，其他情况j不动等待i遇到0后重复上述第1步的操作
 * @Time: O(n)
 * @Space: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //[0,1,0,3,12] [1,0,0,3,12], [1,3,0,0,12], [1,3,12,0,0]
    for(let i = 1,j=0;i < nums.length; i ++ ){
        if(nums[i] !== 0 && nums[j] === 0) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j ++ ;
        }else if(nums[j] !== 0){
            j ++ ;
        }
    }
    return nums;
}
//直接把filter出去然后同时记录0的个数，再一遍循环把0push到filter后的数组结尾
var moveZeroes_filter = function(nums) {
    let count = 0;
    let  arr = nums.filter(val => {
        if(val === 0) count ++;
        return val !== 0
    })

    for(let i = 0; i < count; i ++ ) {
        arr.push(0)
    }

    return arr;
}