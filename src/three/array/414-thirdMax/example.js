// let thirdMax = function(nums) {
//     if (nums.length === 0) return nums[0]
//     let max = 0
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if (max < element) {
//             max = element
//         }
//         if (!obj[element]) {
//             obj[element] = 1
//         }
//     }
//     let arr = Object.keys(obj)
//     if (arr.length >= 3) {
//     return arr.sort((a,b) => {
//         return b - a
//     })[2]
//     }
//     return max
// }

let thirdMax = function(nums) {
    let list = [...new Set(nums)]
    list = list.sort((a, b) => {
        return b - a
    })
    if (list.length >= 3) {
        return list[2]
    } else {
        return list[0]
    }
}

let nums = [3, 2, 1]
// let nums = [1, 2]
// let nums = [2,2,3,1]


let r = thirdMax(nums)
console.log('r :>> ', r)