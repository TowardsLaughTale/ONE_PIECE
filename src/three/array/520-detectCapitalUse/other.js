/*
 * @Subject: 题目描述
    给定一个单词，你需要判断单词的大写使用是否正确。

 * @Thought: 思路分析
    遍历字符串，得到大写字母有多少个，且第一个字母是否为大写字母
    后续判断：
    大写字母为0个，返回 true
    大写字母为1个，且首字母大写，返回 true
    大写字母个数与字符串长度一样，说明都是大写字母，返回 true
    其他情况返回 false

 * @Complexity: 复杂度
    时间复杂度： O(n)
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：84 ms, 在所有 JavaScript 提交中击败了90.20%的用户
    内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了44.52%的用户
 */

/**
 * @param {string} word
 * @return {boolean}
 */
let detectCapitalUse = function(word) {
    let count = 0, firstPlus = false, charNum
    // 65-90 A-Z
    // 97-122 a-z
    for (let i = 0; i < word.length; i++) {
        charNum = word[i].charCodeAt()
        if (charNum >= 65 && charNum <= 90) {
            count++
            if (i === 0) {
                firstPlus = true
            }
        }
    }
    if (count === 0) {
        return true
    }
    if (count === 1 && firstPlus) {
        return true
    }
    if (count === word.length) {
        return true
    }
    return false
}

let word = 'USA'
word= 'FlaG'
let r = detectCapitalUse(word)
console.log('r :>> ', r)
