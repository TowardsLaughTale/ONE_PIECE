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

/*
 * @Subject: 题目描述
    给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 * @Thought: 思路分析
    切分字符串为数组
    遍历该数组
    截取字符串到空字符的范围，进行翻转
    后续相同操作

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：96 ms, 在所有 JavaScript 提交中击败了69.83%的用户
    内存消耗：44.9 MB, 在所有 JavaScript 提交中击败了11.14%的用户
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
    let arr = s.split(''), start = 0, last = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ' ' || arr[i] === undefined) {
            last = i - 1
            while(start < last) {
                [arr[start], arr[last]] = [arr[last], arr[start]]
                start++
                last--
            }
            start = i + 1
        }
        
    }
    return arr.join('')
}

let s = "Let's take LeetCode contest"
let r = reverseWords(s)
console.log('r :>> ', r)
