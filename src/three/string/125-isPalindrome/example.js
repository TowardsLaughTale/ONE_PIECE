/*
 * @Subject: 题目描述
    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

 * @Thought: 思路分析
    左右两边同时开始遍历
    不符合字母和数字的跳过，左右有效字符一一对比
    若不相等，即不是回文
    左侧遍历下标大于右侧遍历下标，都没有出现不相等的，则说明是回文

 * @Complexity: 复杂度
    时间复杂度： O(n)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：92 ms, 在所有 JavaScript 提交中击败了86.88%的用户
    内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了55.12%的用户
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    if (s === '') return true
    let r = /[A-Za-z0-9]/
    let i = 0, j = s.length - 1
    while(i <= j) {
        while(!r.test(s[i]) && i <= j) {
            if (s[i] === '') {
                emptyCount++
            }
            i++
        }
        while(!r.test(s[j]) && j >= i) {
            if (s[j] === '') {
                emptyCount++
            }
            j--
        }
        if (i <= j) {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false
            }
            i++
            j--
        }
    }
    return true
}