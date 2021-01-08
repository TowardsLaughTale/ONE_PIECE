/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //start and end should not follow 0-based standard at this time
        let start = 1
        let end = n 
        //[1,2,3,4,5],[1,2,3],[1,2,3,4,5,6]
        while(start < end - 1){//@TODO
            //Note to use Math.floor to get a Interger index
            let mid = Math.floor(end - (end - start ) / 2)
            let bad = isBadVersion(mid)
            if(bad) end = mid
            else if(!bad) start = mid 
        }

        if(isBadVersion(start) || start > end) return start
        else return end
    };
};