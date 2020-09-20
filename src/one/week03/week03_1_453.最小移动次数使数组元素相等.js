/*
 * @Subject: 题目描述
    给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。
    示例:
        输入: [1,2,3]
        输出: 3
    解释:
        只需要3次移动（注意每次移动会增加两个元素的值）：
        [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * @Thought: 思路分析
    一. 开始想的是采用一遍遍循环的方法，每次找出最大的数，把其它的数全部+1，直到所有的数都相等。
    这种的时间复杂度很高：找出最大的数 + 其它数加1 +  判断数相等= O(n^3)
    二. 然后考虑递归的方式：N(n) = N(n-1) + L(n-1)
        1. n个数的移动次数 = n-1个数的移动次数 + 移动到最后的一个数需要的次数
        2. [1,2,3] = [1,2] + (3-2) = 1 + 2 = 3
        3. 先对数组进行排序，就没必要每次找出最大值了，也方便处理
        4. 递推公式：一步步推导
          F(n)moves = F(n-1)moves + F(n)max + F(n-1)moves - (F(n-2)moves + F(n-1)max)
    三. 既然已经推导出了递推公式，考虑可以使用动态规划的方法
 * @Complexity: 复杂度
    时间复杂度：排序时间复杂度O(nlogn) + 递归的时间复杂度 O(n) = O(nlogn)
    空间复杂度：O(n)
 * @Result: 运行结果
    84/84 cases passed (5856 ms)
    Your runtime beats 5.59 % of javascript submissions
    Your memory usage beats 5.95 % of javascript submissions (323.2 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
let catchMap
var minMoves = function (nums) {
    if (nums.length < 2) return 0

    nums.sort((a, b) => a - b)
    catchMap = {}

    return _movesNum(nums)

};
var _movesNum = function (nums) {

    if (nums.length <= 1) return 0
    if (nums.length === 2) {
        return nums[1] - nums[0]
    }

    const len = nums.length
    if (catchMap[len]) {
        return catchMap[len]
    }

    const maxNum = nums.pop() // 获取n的最大值
    const maxNum1 = nums[nums.length - 1] // 获取n-1的最大值
    const moves1 = _movesNum(nums.slice(0, -1)) // 获取n-2的moves
    const moves = _movesNum(nums) // 获取n-1的moves

    if (!catchMap[len]) {
        catchMap[len] = moves + (maxNum + moves) - (moves1 + maxNum1)
    }

    return moves + (maxNum + moves) - (moves1 + maxNum1)
};
// @lc code=end

