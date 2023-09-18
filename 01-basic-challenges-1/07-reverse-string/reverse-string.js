function reverseString(string) {
    // hello world-> olleh
    //  ij 
    let reverseString = string.split('')
    let start = 0;
    let end = string.length - 1;


    while (start < end) {
        [reverseString[start], reverseString[end]] = [reverseString[end], reverseString[start]]
        // let temp = str[start];
        // str[start] = str[end];
        // str[end] = temp;
        start++;
        end--;
    }

    return reverseString.join('');

    // let str = ''
    // for (let i = string.length - 1; i >= 0; i--) {
    //     str += string[i];
    // }

    // return str;

}

module.exports = reverseString;
