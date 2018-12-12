/**
 * Mergesort uses divide & conquer to split array into chunks then merge them in sorted order.
 * Time complexity is
 * Best Ω(n log n)
 * Avg O(n log n)
 * Worst O(n log n)
 * 
 * Based on https://www.youtube.com/watch?v=4VqmGXwpLqc
 */

const input = Array.from({length: 10}, () => Math.floor(Math.random() * 40));

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  let arrOne = arr.slice(0, mid);
  let arrTwo = arr.slice(mid, arr.length);

  arrOne = mergeSort(arrOne);
  arrTwo = mergeSort(arrTwo);

  return merge(arrOne, arrTwo);
}



// Modifies input arrays
function merge(a, b) {
  const merged = [];

  while (a.length && b.length) {
    if (a[0] > b[0]) {
      merged.push(b.shift());
    } else {
      merged.push(a.shift());
    }
  }

  return merged;
}



// Testing

const customSort = mergeSort(input);
const sysSort = input.slice().sort((a, b) => a - b);

const isSorted = customSort.every((item, i) => item === sysSort[i]);
console.log(`Array ${isSorted ? 'is' : `isn't`} sorted.`);
