import { getPrimeNumbers } from '../getPrimeNumbers';

test('getPrimeNumbers', () => {
    expect(getPrimeNumbers(4)).toEqual([2, 3]);
    expect(getPrimeNumbers(0)).toEqual([]);
    expect(getPrimeNumbers(1)).toEqual([]);
    expect(getPrimeNumbers(7)).toEqual([2, 3, 5, 7]);
    expect(getPrimeNumbers(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    expect(getPrimeNumbers(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});
