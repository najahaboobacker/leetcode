/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>b-a)
    for(i=0;i<nums.length-2;i++) {
        if(nums[i+2]>nums[i]-nums[i+1])
        return nums[i+2]+nums[i+1]+nums[i]
    }
    return 0
};