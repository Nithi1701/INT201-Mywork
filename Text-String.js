function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
}
console.log(reverse("hello world"));


function replaceVowels(str){
    vowel = str.replace(/[a,e,i,o,u]/gi, '*');
    console.log(vowel);
}
console.log(replaceVowels('hello world'));


function countString(str){
    let  count = str.match(/[a,e,i,o,u]/gi);
    if(count == null){
        return 0;
    } else{
        return count.length;
    }
}
console.log(countString('hello world'));