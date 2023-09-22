function isPalindrome(string) {
    //madam
    // let i = 0;
    // let j = string.length - 1;
    // let cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').join('')

    // while (i < j) {
    //     if (cleanedString[i] !== cleanedString[j]) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reversedStr = cleanedString.split('').reverse().join('')

    return cleanedString === reversedStr;
}

module.exports = isPalindrome;
