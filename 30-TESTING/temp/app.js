function isPalindrome(string){
    // remove whitespace using regex
    let string2 = string.replace(/\s/, '').toLowerCase();
    let letterFwd;
    let letterBack;
    console.log(string2);

    // for each letter in string
    for (let i = 0 ; i < string2.length ; i++){
        console.log(i);
        // read the ith letter and the length-ith letter and compare.
        letterFwd = string2[i];
        console.log(letterFwd);
        letterBack = string2[string2.length-1-i];
        console.log(letterBack);
        if (letterFwd == letterBack){
            console.log("letters match");
            continue;
        } else {
            console.log('Letters do not match')
            return false
        }
    }
    return true;
};

console.log(isPalindrome('madam'));
