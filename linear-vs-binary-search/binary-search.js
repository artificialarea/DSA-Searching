// algorithm
function binarySearch(array, value, steps = 0, start = 0, end = array.length - 1) {

    

    steps = steps + 1;

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(steps, start, index, end);

    if (start > end) {
        return `No number found in ${steps} steps`;
        // return -1;
    }

    if (item == value) {
        return `Number found in ${steps} steps`;
        // return index;
    }
    else if (item < value) {
        return binarySearch(array, value, steps, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, steps, start, index - 1);
    } 
}

// sort dataset
const sort = datasetForBinary.sort(function (a, b) { return a - b; });
// remove any duplicate numbers from dataset
let uniqueNums = [...new Set(sort)];
console.log('dataset, sorted and deduped for binary search: ', uniqueNums);
// console.log('dataset, sorted for binary search: ', sort);

// interactions
const binaryElement = document.querySelector('.binary');
binaryElement.addEventListener('change', (event) => {
    const display = document.querySelector('#binary-display');
    const input = binarySearch(uniqueNums, event.target.value);
    display.textContent = input;
});