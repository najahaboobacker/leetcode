/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let newarr = s.split('')
    let check = []

    for (i = 0; i < s.length; i++) {
        if (newarr[i] == '(') {
            check.push('(')
        }
        else if (newarr[i] == '{') {
            check.push('{')
        }
        else if (newarr[i] == '[') {
            check.push('[')
        }
        else if (newarr[i] == ')') {
            if (check.pop() != '(')
                return false
        }
        else if (newarr[i] == '}') {
            if (check.pop() != '{')
                return false
        }
        else if (newarr[i] == ']') {
            if (check.pop() != '[')
                return false
        }
    }
    return (check.length == 0)? true:false
};