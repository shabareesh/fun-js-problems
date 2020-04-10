import { fibonacci } from '../fibonacci';

test('Fibonacci', () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(7)).toEqual(13);
});
