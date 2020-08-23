// let maximumProduct = function(nums) {
//     let z = f = 0
//     nums.forEach(n => {
//         if (n >= 0) {
//             z++
//         } else {
//             f++
//         }
//     });
//     let list = nums.sort((a,b) => {
//         return a - b
//     })
//     let len = list.length
//     if (z >= 3) {
//         if (f >= 2) {
//             return Math.max(nums[len - 3]*nums[len - 2]*nums[len - 1], nums[0] * nums[1] * nums[len - 1])
//         } else {
//             return nums[len - 3]*nums[len - 2]*nums[len - 1]
//         }
//     }
//     if (z === 2) {
//         if (f >= 2) {
//             return nums[0] * nums[1] * nums[len - 1]
//         } else {
//             return nums[0]*nums[1]*nums[2]
//         }
//     }
//     if (z === 1) {
//         if (f >= 2) {
//             return nums[0] * nums[1] * nums[len - 1]
//         }
//     }
//     return nums[0]*nums[1]*nums[2]
// };

// let maximumProduct = function(nums) {
//     let list = nums.sort((a,b) => {
//         return a - b
//     })
//     let len = list.length
    
//     return nums[len - 1] * Math.max(nums[0]*nums[1], nums[len - 3] * nums[len - 2])
// };


var maximumProduct = function (nums) {
    const temp = [nums[0], nums[1], nums[2]].sort((a,b) => a - b)

    let max = temp[2];
    let max1 = temp[1]
    let max2 = temp[0]

    let min1 = temp[0]
    let min2 = temp[1]

    nums.forEach((v, index) => {
        if(index <= 2) {
            return
        }

        if (v > max) {
            max2 = max1
            max1 = max;
            max = v;
        } else if (v > max1) {
            max2 = max1
            max1 = v;
        } else if (v > max2) {
            max2 = v;
        }

        if (v < min1) {
            min2 = min1
            min1 = v;
        } else if (v < min2) {
            min2 = v
        }
    })

    return max * (Math.max(max1 * max2, min1 * min2))
};

// let nums = [1,2,3]
// let nums = [-4,-3,-2,-1,60]
let nums = [-1,-2,1,2,3]
// let nums = [1,2,3, 4]
// let nums = [0,0,0]
// let nums = [0,0,0]


let r = maximumProduct(nums)
console.log('r :>> ', r)


// 1、从小到大排序
 


// 都是正数，最大三个正数相乘
// 都是负数，最大三个负数相乘

// 存在负数和正数：

// 三个及以上正数
//     是否存在两个及以上负数
//         存在
//             最小两个负数相乘，再乘一个最大正数
//             对比
//             最大三个正数相乘
//         不存在
//         最大三个正数相乘

// 两个正数
//     是否存在两个及以上负数
//         存在
//             两个最小负数相乘，再乘一个最大正数
//         不存在
//             三个数相乘

// 一个正数
//     是否存在两个及以上负数
//         存在
//             两个最小负数相乘，再乘一个正数
//         不存在，不考虑