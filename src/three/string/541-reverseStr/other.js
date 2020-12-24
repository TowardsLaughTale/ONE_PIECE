/*
 * @Subject: 题目描述
    给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

 * @Thought: 思路分析
    1、收集不到 k 个，直接翻转整个
    2、收集到 k 个，不到 2k个，翻转 k 的字符，剩余保持不变
    3、收集到k字符，再前进k
       若剩余不够 k 个，则剩余字符都翻转
       若收集到k字符，小于2k，则翻转前k的字符，剩余保持原样

 * @Complexity: 复杂度
    时间复杂度： O(n) 
    空间复杂度： O(n)

 * @Result: 运行结果
    执行用时：72 ms, 在所有 JavaScript 提交中击败了98.28%的用户
    内存消耗：39 MB, 在所有 JavaScript 提交中击败了89.31%的用户
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr1 = function(s, k) {
    let len = s.length

    // 重复操作：
    // 1、收集不到 k 个，直接翻转整个
    if (len < k) return s.split('').reverse().join('')

    // 2、收集到 k 个，不到 2k个，翻转 k 的字符，剩余保持不变
    if (len >= k && len < 2 * k) {
        let pks = s.slice(0, k)
        pks = pks.split('').reverse().join('')
        return pks + s.slice(k)
    }

    // 3、收集到k字符，再前进k，
    // 若剩余不够 k 个，则剩余字符都翻转
    // 若收集到k字符，小于2k，则翻转前k的字符，剩余保持原样
    let kTimes = Math.floor(len / k),
        kMod = len % k,
        dkTimes = Math.floor(kTimes / 2),
        dkMod = kTimes % 2,
        count = 0,
        finals = ''

    // 处理 2k 的情况
    while(count <= dkTimes) {
        finals += s.slice(0, k).split('').reverse().join('') + s.slice(k, 2 * k)
        s = s.slice(2 * k)
        count++
    }
    console.log('finals :>> ', finals)


    if (dkMod > 0) {
        // 至少存在一个 k，翻转 k
        finals += s.slice(0, k).split('').reverse().join('')
        s = s.slice(k)
    }
    // 只剩下 kMod
    if (kMod === 0) return finals

    return finals + s
}


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
    执行用时：88 ms, 在所有 JavaScript 提交中击败了61.51%的用户
    内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了20.69%的用户
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr2 = function(s, k) {
    let l = 0, r = 0, len = s.length, astr = s.split('')
    for (let i = 0; i < len; i += 2 * k) {
        // 根据题意可以总结到一下规律：
        // 翻转前 0-k 的元素 k - 2k 不动，
        // 翻转 2k-3k 的元素， 3k-4k的不动
        // 以此类推
        l = i
        // 这里够不够 k 个都翻转，但是要注意是否会超过字符串范围，所以使用 min 
        r = Math.min(l + k - 1, len)
        while(l < r) {
            // 交换 k 的元素
            [astr[l], astr[r]] = [astr[r], astr[l]]
            l++
            r--
        }
    }
    return astr.join('')
}


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
let s = "abcdefg", k = 2
let r = reverseStr(s, k)
console.log('r :>> ', r)
