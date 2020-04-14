export const bubbleSort = (array) => {
    let isSorted = false;
    let counter = 0;

    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;

                isSorted = false;
            }
        }
        counter++;
    }
    
    return array;
};
