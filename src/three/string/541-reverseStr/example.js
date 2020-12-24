/*
 * @Subject: 题目描述
    给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

 * @Thought: 思路分析
    根据题意可以总结到一下规律：
    翻转前 0-k 的元素 k - 2k 不动，
    翻转 2k-3k 的元素， 3k-4k的不动
    以此类推

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr = function(s, k) {
    let f = 0, fs = '', dk = 2 * k, finals = ''
    for (let i = 0; i < s.length; i++) {
        f = i % dk

        // 余数在 k 之内，需要翻转
        // 余数在 k(不含) - 2k 之内，直接拼接，不需要翻转

        // 第 0 位，对应实际是 1 位
        // 第 2k 位，对应实际是 2k+1
        if (f === 0) {
            finals += fs
            fs = ''
        }

        // ******重新累计****
        // 0-(k-1) 进行翻转
        if (f < k) {
            fs = s[i] + fs
        } else {
            // k-(2k-1) 其他情况正常拼接
            fs += s[i]
        }
    }
    return finals + fs
}