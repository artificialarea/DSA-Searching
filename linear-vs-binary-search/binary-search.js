// algorithm
function binarySearch(array, value, steps = 0, start = 0, end = array.length - 1) {

    steps = steps + 1;

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(steps, start, index, end);

    if (start > end) {
        return `Binary Search: No number found in ${steps} steps`;
        // return -1;
    }

    if (item == value) {
        return `Binary Search: Number found in ${steps} steps`;
        // return index;
    }
    else if (item < value) {
        return binarySearch(array, value, steps, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, steps, start, index - 1);
    } 
}

