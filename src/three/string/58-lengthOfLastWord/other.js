/*
 * @Subject: 题目描述
    给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
    如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
    如果不存在最后一个单词，请返回 0 。

 * @Thought: 思路分析
    1、去掉末尾空格
    2、使用 lastIndexOf 找到最后一个空格位置
    3、截取该空格位置+1的长度

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：80 ms, 在所有 JavaScript 提交中击败了75.21%的用户
    内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了34.92%的用户
 */

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord1 = function(s) {
    let es = s.trim(), idx = es.lastIndexOf(' ')
    idx = idx > -1 ? idx + 1 : 0
    return es.slice(idx).length
}



/*
 * @Subject: 题目描述
    给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
    如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
    如果不存在最后一个单词，请返回 0 。

 * @Thought: 思路分析
    倒序遍历字符串
    1、遇到空字符则略过
    2、第一次略过空字符后，遇到字符开始计数
    3、直到遇到第二次空字符或者到达第一个字符串，则停止计数，返回该计数

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(1)

 * @Result: 运行结果
    执行用时：72 ms, 在所有 JavaScript 提交中击败了96.79%的用户
    内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了45.79%的用户
 */

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    let len = 0, i = s.length - 1
    while(s[i] === ' ') {
        i--
    }
    while(s[i] !== ' ' && s[i] !== undefined) {
        i--
        len++
    }
    return len
}

let s = "Hello World"
// s = ''
// s = "                "
// s = "a "
let r = lengthOfLastWord(s)
console.log('r :>> ', r)
