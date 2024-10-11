/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let new_num = num.toString().split('')
    for (i = 0; i < new_num.length; i++) {
        if (new_num[i] == '6') {
            new_num[i] = '9'
            break;
        }
    }
    return +new_num.join('')
};