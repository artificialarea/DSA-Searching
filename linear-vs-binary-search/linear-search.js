// algorithm ;P
function linearSearch(arr, num) {

    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log('steps :', i)
        steps++;
        if (arr[i] === parseInt(num)) {
            return `Number found in ${steps} steps`;
            // return i;
        }
    }
    return `No number found in ${steps} steps`;
    // return null;
}

// dataset
console.log('dataset: ', dataset);

// interactions
const linearElement = document.querySelector('.linear');
linearElement.addEventListener('change', (event) => {
    const display = document.querySelector('#linear-display');
    const input = linearSearch(dataset, event.target.value);

    display.textContent = input;
});