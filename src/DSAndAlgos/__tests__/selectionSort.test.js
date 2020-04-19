import { selectionSort } from '../selectionSort';

test('selectionSort', () => {
    expect(selectionSort([1, 3, 2])).toEqual([1, 2, 3]);
    expect(selectionSort([3, 1, 2, 5])).toEqual([1, 2, 3, 5]);
    expect(selectionSort([8, -6, 2, -6, 3, 4])).toEqual([-6, -6, 2, 3, 4, 8]);
    expect(selectionSort([8, 4, 7, 9, 3, 2])).toEqual([2, 3, 4, 7, 8, 9]);
});
