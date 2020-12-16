/*
 * @Subject: 题目描述
    给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
    
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