/**
 * @param {number[]} nums
 * @return {number}
 */
//Solution 1: Two pointers, Time: O(n),Space: O(1)
var removeDuplicates = function(nums) {
    let p = 0, q = 1;
    while(q < nums.length ){
        if(nums[p] === nums[q]){
            q ++ ;
            continue;
        }
        nums[++p] = nums[q];
    }
    return p + 1;
}

//Solution2: Splice 
// var removeDuplicates_splice = function(nums) {
//     let i = 0;
//     while(i < nums.length){
//         if(nums[i] === nums[i+1]){
//             nums.splice(i,1);
//             i--;//Could introduce off-by-one error,so decrease by 1
//         }
//         i++;
//     }
    // console.log(nums.filter((val,i) => {//returns new array not in-place
    //     return i === 0 ? true : val === nums[i - 1] ? false : true;
    // }));

// };
