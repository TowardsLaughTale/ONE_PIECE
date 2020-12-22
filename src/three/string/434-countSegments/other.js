/*
 * @Subject: 题目描述
    统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。请注意，你可以假定字符串里不包括任何不可打印的字符。

 * @Thought: 思路分析
    while 遍历字符串
    单词循环中
    1、遇到空的字符，字符下标前进
    2、处理完空字符后，遇到非空的，字符下标前进，直到遇到空字符或者undefined，则单词数加 1

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：68 ms, 在所有 JavaScript 提交中击败了99.40%的用户
    内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了32.10%的用户
 */

/**
 * @param {string} s
 * @return {number}
 */
let countSegments = function(s) {
    let count = 0, len = s.length, i = 0
    while(i < len) {
        while(s[i] === ' ') {
            i++
        }
        if (i >= len) {
            return count
        }
        while(s[i] !== ' ' && s[i] !== undefined) {
            i++
        }
        count++
    }
    return count
}


let s = "Hello, my name is John"
// s = ''
s = "                "
let r = countSegments(s)
console.log('r :>> ', r)
