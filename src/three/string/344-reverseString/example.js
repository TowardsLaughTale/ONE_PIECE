/*
 * @Subject: 题目描述
    编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
    你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

 * @Thought: 思路分析
    双指针法：首尾位置渐进互换

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：104 ms, 在所有 JavaScript 提交中击败了98.52%的用户
    内存消耗：45.2 MB, 在所有 JavaScript 提交中击败了18.81%的用户
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let reverseString = function(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]]
    }
    return s
}