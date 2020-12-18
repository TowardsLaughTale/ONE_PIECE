/*
 * @Subject: 题目描述
    编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

 * @Thought: 思路分析
    使用第一个字符串依次和后面的字符串做前缀对比
    第一和第二个字符串对比，得到相同的前缀 P
    后续使用相同的前缀 P 和第三个字符串相比
    更新前缀 P, 若到最后，P 还不是空字符串，则该 P 就是最长公共前缀
    若 P 成了空字符，则没有最长公共前缀

 * @Complexity: 复杂度
    时间复杂度： O(mn) m字符串的平均长度，n字符串数组数量
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：72 ms, 在所有 JavaScript 提交中击败了99.43%的用户
    内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了19.71%的用户
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return ''

    let prefix = strs[0], count = 0
    for (let i = 1; i < strs.length; i++) {
        count = 0
        len = Math.min(prefix.length, strs[i].length)
        for (let j = 0; j < len; j++) {
            if (prefix[j] === strs[i][j]) {
                count++
            } else {
                break
            }
        }
        if (!count) return ''
        prefix = prefix.slice(0, count)
    }
    return prefix
}