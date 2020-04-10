import '../arrayFlat';

test('customFlat', () => {
    expect([1, [2, [3, [4]]]].customFlat()).toEqual([1, 2, 3, 4]);
    expect([[[0, 1], 2], 3, 4, 5, [6, [7, 8, [9]]]].customFlat()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect([].customFlat()).toEqual([]);
    expect([2].customFlat()).toEqual([2]);
});
