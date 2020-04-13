import { isPalindrome } from '../isPalindrome';

test('isPalindrome', () => {
    expect(isPalindrome('test')).toEqual(false);
    expect(isPalindrome('a')).toEqual(true);
    expect(isPalindrome('abcdcba')).toEqual(true);
});
