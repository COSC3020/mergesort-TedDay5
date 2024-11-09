function mergesort(array) {
    var size;
    var head;
    var length = array.length;

    for (size = 1; size <= length - 1; size = 2 * size) {
        for (head = 0; head < length - 1; head += 2 * size) {
            var middle = Math.min(head + size - 1, length - 1);
            var tail = Math.min(head + 2 * size - 1, length - 1);
            
            merge(array, head, middle, tail);
        }
    }
    return array;
}
function merge(array, begining, middle, end) {
    var start = middle + 1;

    if (array[middle] <= array[start]) {
        return array;
    }
    while (begining <= middle && start <= end) {
        if (array[begining] <= array[start]) {
            begining += 1;
        }
        else {
            var i = start;
            var temp = array[start]

            while (i != begining){
                array[i] = array[i - 1];
                i -= 1;
            }

            array[begining] = temp;

            begining += 1;
            start += 1;
            middle += 1;
        }
    }
}
