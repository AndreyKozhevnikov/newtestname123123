function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (min < arr[i]) {
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
    console.log(arr);
  }
  return arr;
}
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let less = [];
  let more = [];
  for (i = 1; i < arr.length; i++) {
    let vl = arr[i];
    if (vl <= pivot) {
      less.push(vl);
    } else {
      more.push(vl);
    }
  }
  less = quickSort(less);
  more = quickSort(more);
  return less.concat(pivot).concat(more);
}

console.log('start');
let myarr = [14, 1, 45, 12,3,45,0];
console.log(myarr);
let sorted = quickSort(myarr);
console.log('finish');
console.log(sorted);