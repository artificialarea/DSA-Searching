// algorithm ;P
function linearSearch(arr, num) {

    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log('steps :', i)
        steps++;
        if (arr[i] === parseInt(num)) {
            return `Linear Search: Number found in ${steps} steps`;
            // return i;
        }
    }
    return `Linear Search: No number found in ${steps} steps`;
    // return null;
}


