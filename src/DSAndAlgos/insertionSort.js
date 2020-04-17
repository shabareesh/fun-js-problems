function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

export const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(array[j] < array[j - 1]) {
                swap(j, j - 1, array);
            } else {
                break;
            }
        }
    }
    return array;
};
