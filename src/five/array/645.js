/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNumsV1 = function (nums) {
  let res = []
  nums = nums.sort()

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 <= nums.length && nums[i] == nums[i + 1]) {
      res.push(nums[i])
    }
  }

  nums = [...new Set(nums)]
  let first = nums[0]

  if (first > 1) {
    let n = 1
    while (first > 1) {
      res.push(n)
      first--
      n++
    }
  }

  for (let i = 1; i < nums.length; i++) {
    let duration = nums[i] - nums[i - 1]
    let j = 1
    while (duration > 1) {
      res.push(nums[i - 1] + j)
      duration--
      j++
    }
  }

  return res
}

//省略用hash方式实现
var findErrorNums = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b
  })
  //设置为元素中不可能出现的值用来唯一标识，方便快速定位问题
  let duplicate = 0
  //如果元素中没有1，丢失的元素肯定是1，所以初始化为1
  let missing = 1

  for (let i = 1; i < nums.length; i++) {
    //开始的两个元素相等
    //如果元素都是以1开头，则重复元素为1，丢失元素分为两种情况
    //1. 如果紧跟的元素为2则继续循环 [1,1,2] -> [1,3]
    //2. 如果元素不为2，则丢失元素为2，循环终止[1,1] -> [1,2]   [1,1,3] -> [1,2]
    if (nums[i] == nums[i - 1] && i == 1) {
      if (nums[i] == 1) {
        duplicate = 1
        if (nums[i + 1] == 2) {
          continue
        } else {
          missing = 2
        }
      } else {
        duplicate = nums[i]
        missing = 1
      }
      break
    } else if (nums[i] == nums[i - 1]) {
      //不是开头的两个元素相等则中间两个元素相等
      //重复元素为该元素 [1,2,3,3,4]
      //此处不计算丢失元素，因为无法判断，需要继续循环才能判断
      duplicate = nums[i]
    } else if (nums[i] - nums[i - 1] > 1) {
      //如果相邻元素差值大于1，则丢失元素为nums[i - 1] + 1 [1,2,2,4]
      //此处不计算重复元素，因为无法判断，需要继续循环才能判断
      missing = nums[i - 1] + 1
    }
  }

  //边界情况处理，如果元素里有1且missing除初始化时被赋值外没有被再次赋值，则表明都是连续元素
  //丢失元素为最后一个元素值加1
  //[1,2,3,3,4,5,6] -> [3,7]
  if (nums[0] == 1 && missing == 1) {
    missing = nums[nums.length - 1] + 1
  }

  return [duplicate, missing]
}
