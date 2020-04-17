import { insertionSort } from '../insertionSort';

test('insertionSoft', () => {
    expect(insertionSort([3, 4, 2, 1, 9, 7, 6])).toEqual([1, 2, 3, 4, 6, 7, 9]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([2, 1])).toEqual([1, 2]);
});
