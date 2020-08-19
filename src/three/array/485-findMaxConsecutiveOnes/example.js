let findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0
    let count = 0
    nums.forEach(num => {
        if (num === 1) {
            count++
            if (count > maxCount) {
                maxCount = count
            }
        } else {
            count = 0
        }
    })
    return maxCount
}

// let x = [1,1,0,1,1,1]
let arr = [0]

let r = findMaxConsecutiveOnes(arr)
console.log('r :>> ', r)