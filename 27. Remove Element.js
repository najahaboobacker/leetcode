/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0, len = nums.length
    for (i = 0; i < len; i++) {
        if (nums[k] == val)
            nums.splice(k, 1)

        else
            k++
        console.log(k, nums)
    }
    return k
};