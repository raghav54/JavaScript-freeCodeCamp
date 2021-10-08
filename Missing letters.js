/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
  let arr = str.split('');
  let index = str.charCodeAt(0);
  let r=-1;
  if(arr.some((item,i) => {r = i;
  return str.charCodeAt(i) != index+i;
  })==true){
return String.fromCharCode(index+r);
  }else
  return undefined;
}

fearNotLetter("abce");
