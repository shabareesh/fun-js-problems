import '../arrayMap';

const count = [1, 2, 3, 4, 5].customMap(item => item * 2);

test('customMap', () => {
    expect(count).toEqual([2, 4, 6, 8, 10]);
});
