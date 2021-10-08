/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

function uniteUnique(arr1,arr2,...x) {
  let final = [...arr1];
  for(let i =0;i<arr2.length;i++){
    if(!final.includes(arr2[i])){
      final.push(arr2[i]);
    }
  }
  for(let i =0;i<x.length;i++){
    for (let j =0;j<x[i].length;j++){
       if(!final.includes(x[i][j])){
      final.push(x[i][j]);
      }
    }
  }
  return final;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
