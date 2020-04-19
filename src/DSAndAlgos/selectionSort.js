const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

export const selectionSort = (array) => {
    let startIndex = 0;
    const length = array.length;

    for(let i = startIndex; i < length; i++) {
        let smallestIndex = startIndex;

        for(let j = startIndex; j < length; j++) {
            if (array[smallestIndex] > array[j]) {
                smallestIndex = j;
            }
        }
        swap(startIndex, smallestIndex, array);
        startIndex++;
    }

    return array;
};
