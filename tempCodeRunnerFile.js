var nums = [2,7,11,15]
var target = 9;



function twoSum(nums, target) {
    console.log("test")
    for (let i = 0; i < nums.length; i++) { // 2 
      for (let j = i + 1; j < nums.length; j++) { // 7
        if (nums[i] + nums[j] === target) {
          console.log(result);
          return result = [i , j]; //return matches as an array 
        }
      }
      
    }
  }