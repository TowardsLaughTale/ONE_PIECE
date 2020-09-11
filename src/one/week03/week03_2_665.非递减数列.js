/*
 * @Subject: 题目描述
    给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
    我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
    示例 1:
        输入: nums = [4,2,3]
        输出: true
        解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
    示例 2:
        输入: nums = [4,2,1]
        输出: false
        解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
    说明：
        1 <= n <= 10 ^ 4
        - 10 ^ 5 <= nums[i] <= 10 ^ 5
 * @Thought: 思路分析
    1. 构造一个由数组的两两差新数组，
    2. 再构造左右双指针
        1. 只要出现大于等于2个下降的就不满足
        2. 出现1个下降且下降在中间
            1. 如果下降幅度大于后一个的上升幅度，不满足
            2. 反之，满足
    3. 再判断满足更改条件的个数
    4. 空间复杂度可以优化，可以构造一个长度为4的滑块
 * @Complexity: 复杂度
    时间复杂度：O(n)
    空间复杂度：O(n)
 * @Result: 运行结果
    334/334 cases passed (88 ms)
    Your runtime beats 79.61 % of javascript submissions
    Your memory usage beats 9.09 % of javascript submissions (42.7 MB)
 * @Author: qiukai
 */

/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    if (nums.length <= 2) return true

    const newArray = []
    for (let index = 0; index < nums.length - 1; index++) {
        newArray.push(nums[index + 1] - nums[index])
    }

    let l = 0
    let r = newArray.length - 1
    while (l < r) {
        // 直到在左边找到第一个下降（小于0）的
        while (newArray[l] >= 0 && l < r) {
            l++
        }

        // 直到在右边找到第一个下降的
        while (newArray[r] >= 0 && l < r) {
            r--
        }

        // 如果都大于0说明满足
        if (newArray[l] >= 0 && newArray[r] >= 0) {
            return true
        }

        // 如果都大小于0说明不满足
        if (newArray[l] < 0 && newArray[r] < 0 && l < r) {
            return false
        }

        // 或者在左右边界
        if (l === newArray.length - 1 || l === 0) {
            return true
        }

        // 如果下降复杂度小于任何一个上升幅度
        if (newArray[l] + newArray[l + 1] >= 0 || newArray[l] + newArray[l - 1] >= 0) {
            return true
        }

        return false
    }
};
// @lc code=end

