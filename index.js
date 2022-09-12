function bubbleSort(arr) {
    const len = arr.length;
    let swapped = false;

    for (let i = 0; i < len - 1; i++) {
        swapped = false;

        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const savedItem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = savedItem;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([ 3, 8, 5, 23, 1, 0, 4 ]))
