const arr = [1,1,0,1,1,1];
let count = 0;
console.log(Date.parse(new Date()))
// 遍历比较本次和上一个值，如果相等则给count加一
arr.forEach((v,i)=>{
    if(v!==arr[i-1]){
        count = count
    }else{
        count++
    }
})
console.log(count);
console.log(Date.parse(new Date()))