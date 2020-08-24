let longestOnes = function(A, K) {
    let left = 0, max = 0, right = 0;

    for (; right < A.length; right++) {
        if (A[right] === 0){
            if (K > 0) {
                K--;
            } else {
                max = Math.max(max, right - left);
                while (A[left++] === 1);
            }
        }
    }
    return Math.max(max, right - left);
}