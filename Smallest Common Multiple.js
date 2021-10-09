/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/
function smallestCommons(arr) {
  let a = Math.min(arr[0],arr[1]);
  let b = Math.max(arr[0],arr[1]);
  let temp = [];
  for (let i = a; i<=b;i++){
    temp.push(i);
  }
  let tempLCM = LCM(temp[0],temp[1]);
  for (let i = 2; i<temp.length;i++){
     tempLCM = LCM(tempLCM,temp[i]);
  }

  return tempLCM;
}
function LCM(x,y){
    let a = Math.min(x,y);
    let b = Math.max(x,y);
    let multiple = b;
    let i = 2;
    while(multiple%a != 0){
      multiple = b*i;
      i++;
    }
    return multiple;
  }
console.log(smallestCommons([1,5]));
