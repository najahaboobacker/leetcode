/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let cube=0
    if(n<=0)
    return false
    else if(n==1)
    return true
    else{
    for(i=1;i<=n/2;i++){
        cube=3**i
        console.log(cube)
        if(cube==n)
        return true
        else if(cube>n)
        return false
    }
    }
};