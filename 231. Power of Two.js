/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n.toString(2).replaceAll(0,"") == '1'
};