import { bubbleSort } from '../bubbleSort';

test('bubbleSort', () => {
    expect(bubbleSort([4, 2, 6, 1, 9, 5])).toEqual([1, 2, 4, 5, 6, 9]);
    expect(bubbleSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
    expect(bubbleSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
});
