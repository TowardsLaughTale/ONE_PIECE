/**
 * LCP 18. 早餐组合
 */
var breakfastNumber = function(staple, drinks, x) {
    const obj = {}
    let sum = 0
    staple.forEach((v, i) => {
        if(v < x) obj[v] = (obj[v] || 0) + 1
    })
    for(let i = 0; i < x; i ++ ){
        obj[i] = (obj[i] || 0) + (obj[i - 1] || 0)//因为此时不知道drinks里面会有什么样的方案所以要按最坏情况考虑。如果map中之前有这一个价格，那么它的新价格就是自己的价格（没有就是0）加上前一个元素所累加的，前一个元素也遵循同样的规则。这样，针对drinks中可能出现的不同的值，map中总会有一种方案对应
    }
    //[10,10,13]
    console.log(obj,sum)
    for(let d of drinks){
        let tmp = x - d
        if(tmp > 0) sum += obj[tmp]
    }
    return sum % 1000000007
};
// function breakfastNumber(staple: number[], drinks: number[], x: number): number {
//   staple.sort((a, b) => a - b)
//   drinks.sort((a, b) => a - b)
//   let sum = 0
//   let mod = 1000000007
//   for(let s of staple) {
//     let y = x - s
//     if( y >= 0 && y >= drinks[0] ) sum += bs(y)
//   }
//   return sum % mod

//   // 二分查找
//   function bs(target: number): number {
//     let i = 0;
//     let j = drinks.length - 1
//     if(drinks[j] <= target) return j + 1
//     while(i < j) {
//       let mid = i + ( (j - i) >> 1)
//       if(drinks[mid] > target) {
//         j = mid
//       } else {
//         i = mid + 1
//       }
//     }
//     return i
//   }
// };