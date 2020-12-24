/*
 * @Subject: 题目描述
    给定一个字符串，逐个翻转字符串中的每个单词。

 * @Thought: 思路分析
    1、使用正则 /\s+/ 切分数组
    2、翻转
    3、使用空格合并
    4、去掉首尾空格

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：72 ms, 在所有 JavaScript 提交中击败了97.22%的用户
    内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了58.37%的用户
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords1 = function(s) {
    return s.split(/\s+/g).reverse().join(' ').trim()
}



/*
 * @Subject: 题目描述
    给定一个字符串，逐个翻转字符串中的每个单词。

 * @Thought: 思路分析
    1、去掉首尾空格
    2、从左到右收集单词，使用 unshift 方法放进数组
    3、最后使用空格合并

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：76 ms, 在所有 JavaScript 提交中击败了93.00%的用户
    内存消耗：40 MB, 在所有 JavaScript 提交中击败了8.58%的用户
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
    let fs = s.trim(), word = '', arr = []
    for (let i = 0; i <= fs.length; i++) {
        if (fs[i] === ' ' || fs[i] === undefined) {
            if (word !== '') {
                arr.unshift(word)
                word = ''
            }
        } else {
            word += fs[i]
        }
    }
    return arr.join(' ')
}

let s = "the  sky is blue"
// "blue is sky the"
let r = reverseWords(s)
console.log('r :>> ', r)
