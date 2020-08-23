// let longestOnes = function(nums) {
    
// }



var longestOnes = function(A, K) {
    let left = 0, max = 0, right = 0;

    for (; right < A.length; right++) {
        if (A[right] === 0){
            if (K > 0) {
                K--;
            } else {
                max = Math.max(max, right - left);
                // console.log('before left :>> ', left, A[left]);
                console.log('right, left :>> ', right, left);
                console.log('max :>> ', max);
                // while (A[left++] === 1) {
                //     console.log('after left :>> ', left, A[left]);
                // }
                while(A[left] === 1) {
                    left++
                }
                left++

            }
        }
    }
    return Math.max(max, right - left);
};

let arr = [1,1,1,0,0, 0,  0,  0,  0,0,0, 1,1,1,1,0, 0 , 1, 0]

// === 0  k > 0
// right  4
// k = 0
// left = 0

// === 0  k <= 0
// right 5
// k = 0
// left = 0
// max  5
// ----
// left 4


// === 0 k <=0
// right 10
// k = 0
// left = 4
// -----
// max = 6
// left = 5


// === 0 k <=0
// right 11
// k = 0
// left = 5
// -----
// max = 6
// left 6

// right 12



// let arr = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]

let k = 2

let r = longestOnes(arr, k)
console.log('r :>> ', r)


// var longestOnes = function (A, K) {
//     let result = 0;
//     let length = A.length;
//     let i = 0, j = 0;
//     for (; i < length; i++) {
//         if (A[i] !== 0) {
//             continue;
//         }
//         if (K > 0) {
//             K--;
//         } else {
//             result = Math.max(result, i - j);
//             while (A[j++] === 1);
//         }
//     }
//     return Math.max(result, i - j);
// };

// var longestOnes = function (A, K) {
//     //求某个区间内包含K个0的最长连续子数组的长度
//     let max = 0, len = 0, i = j = 0
//     while (j < A.length) {
//         while (K !== 0 && j < A.length) {
//             if (A[j] === 0) {
//                 K--
//             }
//             j++
//         }
//         while(j < A.length && A[j] != 0) {
//             j++
//         }  
//         len = j - i
//         if (len > max) max = len
//         while (A[i] === 0 && A[j] === 0 && j < A.length) {
//             i++
//             j++
//         }
//         //右边下一位还是0,滑动左边
//         if (A[j] === 0) {
//             while (A[i]) {
//                 i++
//             }
//             i++
//             K++
//         } 
//     }
//     return max
// };