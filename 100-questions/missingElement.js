// Q- unsorted array. Find the missing element

function missingElem(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  // return obj;
  let values = [];
  for (let key in obj) {
    values.push(+key);
  }
  // return values;
  for (let i = 1; i <= n; i++) {
    if (!values.includes(i)) return i;
  }
}

let arr1 = [1, 3, 2, 5, 5];
let arr = [1, 3, 2, 5, 5];

console.log(missingElem(arr, 5));
