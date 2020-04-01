import '../arrayReverse';

test('arrayReverse', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ['a', 'b', 'C', 'D'];

    expect(arr1.customReverse()).toEqual([5, 4, 3, 2, 1]);
    expect(arr2.customReverse()).toEqual(['D', 'C', 'b', 'a']);
});