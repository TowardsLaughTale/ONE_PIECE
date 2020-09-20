/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = [];

  for(let i = 0; i <= rowIndex; i++) {
      let arr = [];
      arr[0] = 1;
      arr[i] = 1;
      if( i > 1){
          for(let j = 1; j < i; j ++) {
              arr[j] = res[i - 1][j - 1] + res[i - 1][j];
          }
      }
      res.push(arr);
  }
  return res[rowIndex];
};