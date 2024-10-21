/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = []
    let pos =[]
    let string = s.split('')
    for(i=0;i<string.length;i++) {
        let a = string[i]
        if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u'||a=='A'||a=='E'||a=='I'||a=='O'||a=='U'){
            vowel.push(a)
        }
    }
    for(i=0;i<string.length;i++){
        let a = string[i]
        if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u'||a=='A'||a=='E'||a=='I'||a=='O'||a=='U'){
           string[i]=vowel.pop()
        }
    }return string.join('')
};