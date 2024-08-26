/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=0
    let copy=x
    if(x>=0){
        for(i=0;x>0;i++){
            num = num*10+(x%10)
            x= Math.floor(x/10)
            console.log(num)
        }
    }return num==copy
    
};