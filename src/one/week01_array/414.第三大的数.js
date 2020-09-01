/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    /**
     * 思路分析：https://qiukai666.gitee.io/treasureMap/blog/%E7%AE%97%E6%B3%95/%E6%B1%82%E7%AC%ACk%E5%A4%A7%E7%9A%84%E6%95%B0.html
     */

    // 先对数组去重
    arr = Array.from(new Set(nums))

    const len = arr.length
    if (len === 1) {
        return arr[0]
    }
    if (len === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    return kthNum(arr, 3);
};
/**
 * 第k大的数
 * @param {array} arr 
 * @param {number} k  
 */
function kthNum(arr, k) {
    const len = arr.length;

    let p = partition(arr, 0, len - 1);

    while (p + 1 !== k) {
        if (p + 1 > k) {
            p = partition(arr, 0, p - 1);
        } else {
            p = partition(arr, p + 1, len - 1);
        }
    }
    return arr[p];
}

function partition(arr, start, end) {
    let i = start;
    let pivot = arr[end];
    for (let j = start; j < end; j++) {
        if (arr[j] > pivot) {
            swap(arr, i, j);
            i += 1;
        }
    }
    swap(arr, i, end);
    return i;
}

function swap(arr, i, j) {
    if (i === j) return;
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
// 时间复杂度O(n)
// 空间复杂度O(1)
// @lc code=end
