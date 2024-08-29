/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let copy = secret.toString().split("")
    let copy1 = guess.toString().split('')
    let x=0,y=0,count=1
    console.log(copy1)
    console.log(copy)
    for(i=0;i<copy.length;i++){
        if(copy1[i]==copy[i]){
        x++
        copy[i]=null
        copy1[i]=" "
        }
    }
       for(i=0;i<copy.length;i++){
            count=1
            for(j=0;j<copy.length;j++){
                if(copy1[i]==copy[j] && i!=j && count){
                y++ 
                count--
                copy[j]=null
                }         
            }
        }
    
    return `${x}A${y}B`
    
};