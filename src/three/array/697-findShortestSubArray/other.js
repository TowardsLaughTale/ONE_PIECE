// 执行用时：112 ms, 在所有 JavaScript 提交中击败了72.83%的用户
// 内存消耗：43.1 MB, 在所有 JavaScript 提交中击败了28.99%的用户
let findShortestSubArray = function(nums) {
    let max = {count : 0, word: []},obj = {}
    nums.forEach((n, index) => {
        if (!obj[n]) {
            obj[n] = {
                count: 1,
                startIdx: index,
                lastIdx: index
        }
        } else {
            obj[n].count++
            obj[n].lastIdx = index
        }
        if (max.count < obj[n].count) {
            max.count = obj[n].count
            max.word = [n]
        } else if (max.count === obj[n].count) {
            max.word.push(n)
        }
    })
    console.log('obj :>> ', obj);
    console.log('max :>> ', max);
    let y = 49999
    max.word.forEach(w => {
        if (y > obj[w].lastIdx - obj[w].startIdx) {
            y = obj[w].lastIdx - obj[w].startIdx
        }
    })
    return y + 1
}


const findShortestSubArray = (nums) => {
    const counts = {}
    const firstIndexes = {}
    const lastIndexes = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        const k = nums[i]
        counts[k] = (counts[k] || 0) + 1
        max = Math.max(max, counts[k])
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i
        }
        lastIndexes[k] = i
    }
    let res = nums.length
    for (const k in counts) {
        if (counts[k] === max) {
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
        }
    }
    return res
};

// let nums = [1,2,2,3,1,4,2]
// let nums = [1, 2, 2, 3, 1]
// let nums = [1]
let nums = [2, 1]
// let nums = [2,1,1,2,1,3,3,3,1,3,1,3,2]
let r = findShortestSubArray(nums)
console.log('r :>> ', r)