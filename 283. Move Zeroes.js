/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {let count=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[count++]=nums[i];
        }
    }
    for(i=count;i<nums.length;i++){
        nums[i]=0;
    }
        
    };