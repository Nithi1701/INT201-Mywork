// 1.Reverse String
function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }
  console.log(reverse("hello world"));

// 2.Replace Vowels with '*'
function replaceVowels(str){
    word = str.replace(/[a,e,i,o,u]/gi, '*');
    console.log(word);
}
console.log(replaceVowels('hello world'));

// 3.count Vowels in String
function countString(str){
    let  vowel = str.match(/[a,e,i,o,u]/gi);
    if(vowel == null){
        return 0;
    } else{
        return vowel.length;
    }
}
console.log(countString('hello world'));