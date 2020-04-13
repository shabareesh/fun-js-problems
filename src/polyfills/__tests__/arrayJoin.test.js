import '../arrayJoin';

test('customJoin', () => {
    const arr = [1, 2, 3, 4];
    
    expect(arr.join()).toEqual(arr.customJoin());
    expect(arr.join(', ')).toEqual(arr.customJoin(', '));
    expect(arr.join('#')).toEqual(arr.customJoin('#'));
    expect(arr.join('>')).toEqual(arr.customJoin('>'));
});
