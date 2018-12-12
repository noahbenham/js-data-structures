/**
 * Quicksort is recursive divide & conquer.
 * It finds a pivot value, then swaps left & right elements.
 * 
 * TODO: Not yet working...
 * 
 * Based on https://www.youtube.com/watch?v=SLauY6PpjW4
 */

const input = Array.from({length: 10}, () => Math.floor(Math.random() * 40));

function quickSort(arr, l, r) {
  console.log(`Left is ${l}, right is ${r}`);
  if (l >= r) return;

  const pivot = arr[(l + r) / 2];
  const dividingPoint = partition(arr, l, r, pivot);
  quickSort(arr, l, dividingPoint - 1);
  quickSort(arr, dividingPoint, r);
  return arr;
}

function partition(arr, l, r, pivot) {
  while(l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }

    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }

  return l;
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
