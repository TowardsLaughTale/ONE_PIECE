// 89/89 cases passed (160 ms)
// Your runtime beats 26.11 % of javascript submissions
// Your memory usage beats 56.64 % of javascript submissions (41.1 MB)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const duArr = [];
    const ret = [];
    const countedNums = nums.reduce((allNums, num)=>{ 
        if (allNums.has(num)) {
            allNums.set(num, allNums.get(num)+1);
        }else {
            allNums.set(num, 1);
        }
        return allNums;
    }, new Map());
    const du = Math.max.apply(Math, [...countedNums.values()]);
    for (let [key, value] of countedNums.entries()) {
        if (value===du) {
            duArr.push(key);
        }
    }
    duArr.forEach(du=>{
        const start = nums.indexOf(du);
        const end = nums.lastIndexOf(du);
        ret.push(end-start+1);
    })
    return Math.min(...ret);
};