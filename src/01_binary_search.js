// Исходный массив должен быть отсортирован
const arr = [-10, -3, 0, 7, 12, 29, 57, 99, 137, 197, 205, 217, 309, 310, 311, 399];

// Элемент, который необходимо найти в массиве
const num = -10;

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = list[mid];
    console.log('guess:', guess);
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else if (guess > item) {
      high = mid - 1;
    }
  }
  return null;
};

console.log(binarySearch(arr, num));
