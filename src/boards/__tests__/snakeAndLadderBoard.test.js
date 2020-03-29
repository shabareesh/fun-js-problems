import { generateSnakeAndLadderBoard } from '../snakeAndLadderBoard';
import { TestScheduler } from 'jest';

test('generateSnakeAndLadderBoard', () => {
    expect(generateSnakeAndLadderBoard(0)).toEqual([]);
    expect(generateSnakeAndLadderBoard(1)).toEqual([[1]]);
    expect(generateSnakeAndLadderBoard(2)).toEqual([[4, 3], [1, 2]]);
    expect(generateSnakeAndLadderBoard(3)).toEqual([[7, 8, 9], [6, 5, 4], [1, 2, 3]]);
    expect(generateSnakeAndLadderBoard(4)).toEqual([[16, 15, 14, 13], [9, 10, 11, 12], [8, 7, 6, 5], [1, 2, 3, 4]]);
});
