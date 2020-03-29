export const generateSnakeAndLadderBoard = (size) => {
    const board = [];
    let cellNumber = 1;

    for(let i = 0; i < size; i++) {
        const rows = [];

        for(let j = 0; j < size; j++) {
            rows.push(cellNumber);
            cellNumber++;
        }

        if (i % 2 === 0) {
            board.push(rows);
        } else {
            board.push(rows.reverse())
        }
    }

    return board.reverse();
};