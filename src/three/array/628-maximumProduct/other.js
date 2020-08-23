
// 从小到大排序
 
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
// 执行用时：148 ms, 在所有 JavaScript 提交中击败了37.04%的用户
// 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了58.99%的用户
let maximumProduct = function(nums) {
    let z = f = 0
    // 计算正数和负数个数
    nums.forEach(n => {
        if (n >= 0) {
            z++
        } else {
            f++
        }
    })

    // 升序排序
    let list = nums.sort((a,b) => {
        return a - b
    })
    let len = list.length
    // 三个正数
    if (z >= 3) {
        // 至少两个负数
        if (f >= 2) {
            return Math.max(nums[len - 3] * nums[len - 2]*nums[len - 1], nums[0] * nums[1] * nums[len - 1])
        } else {
            return nums[len - 3]*nums[len - 2]*nums[len - 1]
        }
    }
    // 两个正数
    if (z === 2) {
        // 至少两个负数
        if (f >= 2) {
            return nums[0] * nums[1] * nums[len - 1]
        } else {
            return nums[0] * nums[1] * nums[2]
        }
    }
    // 一个正数
    if (z === 1) {
        // 至少两个负数
        if (f >= 2) {
            return nums[0] * nums[1] * nums[len - 1]
        }
    }
    // 其他情况，直接前三个相乘
    return nums[0] * nums[1] * nums[2]
}


// 执行用时：136 ms, 在所有 JavaScript 提交中击败了62.68%的用户
// 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了9.36%的用户
let maximumProduct = function(nums) {
    // 升序排序
    let list = nums.sort((a,b) => {
        return a - b
    })
    let len = list.length
    
    // 最小两个值的乘积 
    // 与
    // 第二大与第三个的乘积
    // 比大小

    // 谁比较大就与最后一个元素，即最大值相乘，得到结果
    return nums[len - 1] * Math.max(nums[0]*nums[1], nums[len - 3] * nums[len - 2])
}


// 执行用时：100 ms, 在所有 JavaScript 提交中击败了93.16%的用户
// 内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了98.56%的用户
let maximumProduct = function (nums) {
    // 对前三个值，进行升序排序
    const temp = [nums[0], nums[1], nums[2]].sort((a,b) => a - b)

    // 取前三个最大值
    let max = temp[2];
    let max1 = temp[1]
    let max2 = temp[0]

    // 取最小的两个值
    let min1 = temp[0]
    let min2 = temp[1]

    nums.forEach((v, index) => {
        if(index <= 2) {
            return
        }
        // 用当前值与前三大值比对，更新前三大值
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
        
        // 用当前值与最小两个值比对，更新两个最小值 
        if (v < min1) {
            min2 = min1
            min1 = v;
        } else if (v < min2) {
            min2 = v
        }
    })

    // 最小两个值的乘积 
    // 与
    // 第二大与第三个的乘积
    // 比大小

    // 谁比较大就与最后一个元素，即最大值相乘，得到结果
    return max * (Math.max(max1 * max2, min1 * min2))
}

// let nums = [1,2,3]
// let nums = [-4,-3,-2,-1,60]
let nums = [-1,-2,1,2,3]
// let nums = [1,2,3, 4]
// let nums = [0,0,0]
// let nums = [0,0,0]


let r = maximumProduct(nums)
console.log('r :>> ', r)


