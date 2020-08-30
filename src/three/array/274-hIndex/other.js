// 执行用时：80 ms, 在所有 JavaScript 提交中击败了72.66%的用户
// 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了87.30%的用户
let hIndex = function(citations) {
    if (citations.length === 0) return 0
    citations = citations.sort((a, b) => {
        return a - b
    })
    let h = 0
    for (let i = 0; i < citations.length; i++) {
        // [0,1,5,5,5,7] 每篇至少被引用 4 次的论文，有 4 篇
        // [100] 每篇至少被引用了 1 次的论文，有 1 篇
        if (citations[i] >= citations.length - i ) {
            h = citations.length - i
            break
        }
    }
    return h
}
// let citations = [3,0,6,1,5]
let citations = [0, 1]
// let citations = [0, 0]
// let citations = [100]
// let citations = [0]
// [0,1,5,5,5,7] 每篇至少被引用 4 次的论文，有 4 篇
// [100] 每篇至少被引用了 1 次的论文，有 1 篇
let r = hIndex(citations)
console.log('r :>> ', r)