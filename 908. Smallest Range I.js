/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min = Math.min(...nums)
   let max = Math.max(...nums)
   let diff = max - min
  return (diff>=2*k)? (max-k)-(min+k) : 0 
};