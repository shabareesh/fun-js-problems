export const isPalindrome = (str) => {
    let reverseStr = '';
    let strLength = str.length;

    for(let i = strLength - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return str === reverseStr;
};
