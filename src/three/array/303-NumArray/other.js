/*
 * @Subject: 题目描述
    给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

 * @Thought: 思路分析
    暴力解法：截取 i到j的数组，遍历叠加

 * @Complexity: 复杂度
    时间复杂度： O(n)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：1036 ms, 在所有 JavaScript 提交中击败了5.01%的用户
    内存消耗：47.1 MB, 在所有 JavaScript 提交中击败了7.33%的用户
 */
/**
 * @param {number[]} nums
 */
var NumArray1 = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray1.prototype.sumRange = function(i, j) {
    return this.nums.slice(i, j + 1).reduce((cur, next) => cur+next)
};


/*
 * 
 * @Thought: 思路分析
    缓存解法：
    遍历数组，记录每一步距离开始位置的总和
    根据推算 sum[j, i] = sum[j + 1] - sum[i]
    如 1 2 5 7 3 4 2
    取下标 [2,4] 的总和 = 位置5(不包含5)之前的总和      - 位置2(不包含2)之前的总和
                       = (1 + 2 + 5 + 7 + 3) - (1 + 2)
                       = 5 + 7 + 3(即2到4位置的总和)
 * @Complexity: 复杂度
    时间复杂度： O(1)
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：112 ms, 在所有 JavaScript 提交中击败了99.52%的用户
    内存消耗：43.9 MB, 在所有 JavaScript 提交中击败了59.41%的用户
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = [nums[0]]
    for (let i = 0; i < nums.length; i++) {
        this.sum[i + 1] = this.sum[i] + nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i]
};

let matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
]
let r = new NumArray(matrix)
let x = r.sumRegion(2, 1, 4, 3) //-> 8
// let x = r.sumRegion(1, 1, 2, 2) //-> 11
// let x = r.sumRegion(1, 2, 2, 4) //-> 12

console.log('x :>> ', x)
