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