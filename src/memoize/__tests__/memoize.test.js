import { memoize } from '../memoize';
import { fibonacci } from '../../fibonacci/fibonacci';
import { factorial } from '../../factorial/factorial';

describe('Memoize', () => {
    test('Should Memoize Fibonacci', () => {
        const fibMemo = memoize(fibonacci);
        expect(fibMemo(5)).toEqual(5);
        expect(fibMemo(7)).toEqual(13);
        expect(fibMemo(10)).toEqual(55);
    });

    test('should Memoize factorial', () => {
        const factMemo = memoize(factorial);
        expect(factMemo(5)).toEqual(120);
        expect(factMemo(7)).toEqual(5040);
    });
});
