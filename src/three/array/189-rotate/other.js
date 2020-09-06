// 根据最终移动 k 位，一次性对单个数组元素移动 k 位
// 用换座位举例：
// 移动位数为 2
// 一排座位，A排第一位，移动到 第三个位置
// 第三个位置，移动到第五个位置，以此类推

// 但是有可能出现一种情况

// 比如还是移动位数为 2
// 一排四个座位，A排第一位，移动到第三个位置
// 第三个位置，移动到第一个位置，形成循环，导致第二、四没有处理
// 所以要做起始相等判断，若等于起始位置，则下标进一

// 执行用时：76 ms, 在所有 JavaScript 提交中击败了97.64%的用户
// 内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了44.12%的用户
let rotate = function (nums, k) {
    k = k % nums.length
    let count = 0
    for (let start = 0; count < nums.length; start++) {
        let current = start, prev = nums[start]
        do {
            let nextIdx = (current + k) % nums.length
            let next = nums[nextIdx]
            nums[nextIdx] = prev
            prev = next
            current = nextIdx
            count++
        } while(start !== current)
    }
    return nums
}

// let rotate = function (nums, k) {
//     nums = nums.slice(-k).concat(nums.slice(0, -k))
//     return nums
// }

// let nums = [1, 2, 3, 4, 5, 6, 7]
let nums = [-1, -100, 3, 99]
// [-1, -100, 3, 99]
// [-3, -100, -1, 99]
let k = 2
// let k = 3
let r = rotate(nums, k)
console.log('r :>> ', r)
