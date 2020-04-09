import { sum } from '../sum';

test('Sum', () => {
    expect(sum(2, 3, 4)()).toEqual(9);
    expect(sum(2, 3, 4)(5)()).toEqual(14);
    expect(sum(2, 3, 4)(2)(2, 5)(10)()).toEqual(28);
});
