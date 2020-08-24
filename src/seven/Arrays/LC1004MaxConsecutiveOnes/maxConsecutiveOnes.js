/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = (A, K) => {
    let zeroCnt = 0;
    let start = 0;
    let res = 0;

    for(let end = 0; end < A.length; end ++ ){
        if(A[end] === 0) zeroCnt ++ ;
        while(zeroCnt > K) {//当0的数量超过K的时候时将前面的指针向后挪动来维持合理的window
            if(A[start] === 0) zeroCnt -- ;//前面指针遇到0的时候更新0的数量，因为它要指向下一个数了，这个目前的作废
            start ++ ;
        }
        res = Math.max(end - start + 1, res);
    }
    return res;
  };