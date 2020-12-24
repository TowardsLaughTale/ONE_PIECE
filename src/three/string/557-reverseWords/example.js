/*
 * @Subject: 题目描述
    给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 * @Thought: 思路分析
    1、切分字符串为数组，进行翻转，再合并
    2、此时使用空格切分，在进行翻转，使用空格合并即结果

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：80 ms, 在所有 JavaScript 提交中击败了99.82%的用户
    内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了12.43%的用户
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords1 = function(s) {
    let arr = s.split('').reverse().join('')
    return arr.split(' ').reverse().join(' ')
}