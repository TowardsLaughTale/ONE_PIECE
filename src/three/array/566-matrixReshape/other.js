// 执行用时：104 ms, 在所有 JavaScript 提交中击败了90.16%的用户
// 内存消耗：43.5 MB, 在所有 JavaScript 提交中击败了19.33%的用户
let matrixReshape = function (nums, r,c) {
    if (!nums || nums.length === 0 ) return []

    let rows = nums.length, cols = nums[0].length
    
    r = r ? r : 1
    c = c ? c : 1

    if (rows * cols < r * c) return nums
    let res = []

    // 平铺数组
    nums = nums.reduce((init, cur) => init.concat(cur))

    // 根据最后需要变动的行数，进行遍历
    // 每次遍历将截取需要改动的 列数
    for (let i = 0; i < r; i++) {
        res.push(nums.splice(0, c))
    }
    return res
}

let nums = 
[[1,2],
 [3,4]],
r = 4, c = 0
// [[1,2,3,4]]
// [[1],[2],[3],[4]]

// let nums = 
// [[1,2],
//  [3,4]]
// r = 2, c = 4
let r1 = matrixReshape(nums, r, c)
console.log('r1 :>> ', r1)