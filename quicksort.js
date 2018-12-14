/**
 * Quicksort is recursive divide & conquer.
 * It finds a pivot value, then swaps left & right elements.
 * 
 * TODO: Not yet working...
 * 
 * Based on https://www.youtube.com/watch?v=SLauY6PpjW4
 */

const input = Array.from({length: 10}, () => Math.floor(Math.random() * 40));

function quickSort(arr, left, right) {
  const index = partition(arr, left, right);

  if (left < index - 1) { // Sort left half
    quickSort(arr, left, index - 1);
  }
  if (index < right) { // Sort right half
    quickSort(arr, index, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[(left + right) / 2];

  while (left <= right) {
    // Find elements on left that should be on right
    while (arr[left] < pivot) left++;

    // Find elements on right that should be on left
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, l, r) {
  const tmp = arr[l];
  arr[l] = arr[r];
  arr[r] = tmp;
}



// Testing

const customSort = quickSort(input);
const sysSort = input.slice().sort((a, b) => a - b);

const isSorted = customSort.every((item, i) => item === sysSort[i]);
console.log(`Array ${isSorted ? 'is' : `isn't`} sorted.`);
