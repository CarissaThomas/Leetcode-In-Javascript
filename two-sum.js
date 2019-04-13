var nums = [11,15,2,7]
var target = 9;
var result;

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) { // 2 
      for (let j = i + 1; j < nums.length; j++) { // 7
        if (nums[i] + nums[j] === target) {
          return result = [i , j]; //return matches as an array 
        }
      }
      
    }
  }

  twoSum(nums,target);