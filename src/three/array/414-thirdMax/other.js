// 执行用时：92 ms, 在所有 JavaScript 提交中击败了32.06%的用户
// 内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了8.39%的用户
let thirdMax = function(nums) {
    if (nums.length === 0) return nums[0]
    let max = 0
    let obj = {}
    // 1、遍历得到最大值
    // 2、使用 obj 设置 key 方式去重
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (max < element) {
            max = element
        }
        if (!obj[element]) {
            obj[element] = 1
        }
    }
    let arr = Object.keys(obj)
    // 数组长度大于 3，则取倒序第三个值，即为第三大
    if (arr.length >= 3) {
        return arr.sort((a,b) => {
            return b - a
        })[2]
    }
    // 否则取最大值
    return max
}

// 执行用时：84 ms, 在所有 JavaScript 提交中击败了56.05%的用户
// 内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了53.15%的用户
let thirdMax = function(nums) {
    // set 去重
    let list = [...new Set(nums)]

    // 倒序排序  nlogn
    list = list.sort((a, b) => {
        return b - a
    })

    // 数组长度大于 3，则取第三个值
    if (list.length >= 3) {
        return list[2]
    }
    // 否则取第一个值，即为最大值
    return list[0]
}


// 作者：yunfeihe
// 执行用时：76 ms, 在所有 JavaScript 提交中击败了81.32%的用户
// 内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了51.05%的用户
let thirdMax = function(nums) {
    // 数组长度小于 3， 直接返回最大值
    if (nums.length < 3) return Math.max(...nums)

    // 操作 
    // 最大max1、第二大max2、第三大max3
    // 循环 nums 数组，使用每个元素与三大元素对比
    // 根据大小替换位置，并去重
    let max1 = -Infinity // 存储最大 置为最小值
    let max2 = -Infinity // 存储第二大 置为最小值
    let max3 = -Infinity // 存储第三大 置为最小值
    for (let n of nums) {
        // 先比较最大的，成功就把值向后传递，把第三大的丢掉
        if (n > max1) { 
            max3 = max2
            max2 = max1
            max1 = n
            continue
        }
        // 第一个判断没中，判断是不是第二大的，注意值不能等于最大，这是为了防止重复
        if (n !== max1 && n > max2) { 
            max3 = max2
            max2 = n
            continue
        }
        // 同上，多了个判断条件
        if (n !== max1 && n !== max2 && n > max3) { 
            max3 = n
            continue
        }
    }
    // 这里其实就是判断，在去重后的长度是不是小于3，不是的话三个max肯定都不是-Infinity
    if (max3 === -Infinity || max2 === -Infinity || max1 === -Infinity) return Math.max(max1, max2, max3) 
    return max3 //直接返回正确答案
}



let nums = [3, 2, 1]
// let nums = [1, 2]
// let nums = [2,2,3,1]


let r = thirdMax(nums)
console.log('r :>> ', r)