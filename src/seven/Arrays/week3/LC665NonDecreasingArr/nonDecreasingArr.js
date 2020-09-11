/**
 * @Thought 边走边变化，如果统计出现两个以上的递减，则改变一个数不可能成为non-decreasing（short for nd）。
 * 如果前面点大于当前点nums[i - 1] > nums[i]，此时数组出现递减，若想使数组nd，两个数无法决定，需要第三个数帮忙。
 * 此时看再前面的一个数nums[i - 2]与当前点nums[i]比较：如果nums[i-2]<=nums[i]或者刚开始遍历的时候, nums[i-1]换成nums[i]来保持nd
 * (如果让nums[i]去等于nums[i-1],那么如果以后再出现x > nums[i]&&x<nums[i-1]的数那还不会将数组变成nd)
 * 如果如果nums[i-2]>nums[i], nums[i]换成nums[i - 1]来保持nd
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    //two  decrease sequences would be false
    //hint: turning point
    //[4,2,3,3]
        let d_count = 0;
        for(let i = 1; i < nums.length ; i ++ ) {
            if(nums[i - 1] > nums[i]) {
                d_count ++ ;
                if(d_count > 1) return false;
                if(i - 2 < 0 || nums[i - 2] <= nums[i]){
                    nums[i - 1] = nums[i];
                }else{
                    nums[i] = nums[i - 1];
                }
            }
        }
        return true;
    };