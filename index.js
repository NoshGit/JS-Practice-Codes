// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var a = ['s', 'aa', 44, 11, 'true', true, false, true];
let b = ['nosh', 'swati', 100, 88, 'False', false, true, true, false];
let c = ['mumma', 44, 11, 'baby', true, false, true];

let mergeAndSortArrays = (...arrs) => {
  let mergedArrays = [].concat(...arrs);
  console.log('Merged Array:', mergedArrays);

  let compare = (a, b)=>{
    if (typeof a === 'boolean' && typeof b === 'boolean') {
      // a and b are boolean
      return b - a;
    } else {
      // if a & b are number
      return a - b;
    }
  }

  let sortedArray = mergedArrays.sort((a, b) => {
    return isNaN(a)? (isNaN(b) ? a.localeCompare(b) : -1 ) : compare(a, b);
  });

  console.log('Sorted:', sortedArray);
  return sortedArray;
};

appDiv.innerHTML  = `<h2>${mergeAndSortArrays(a, b, c)}</h2>`;
