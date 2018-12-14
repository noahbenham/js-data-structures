const input = Array.from({length: 10}, () => Math.floor(Math.random() * 40));


function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

/**
 * Changes input arrays
 * @param {*} arr 
 */
function merge(arr1, arr2) {
  const merged = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      merged.push(arr1.splice());
    } else {
      merged.push(arr2.splice());
    }
  }

  return merged;
}


// Testing

const customSort = mergeSort(input);
const sysSort = input.slice().sort((a, b) => a - b);

const isSorted = customSort.every((item, i) => item === sysSort[i]);
console.log(`Array ${isSorted ? 'is' : `isn't`} sorted.`);
