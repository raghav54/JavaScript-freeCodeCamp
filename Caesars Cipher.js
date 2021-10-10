function rot13(str) {
let arr = str.split('');
arr = arr.map(item => {if(item.charCodeAt(0)>=65 && item.charCodeAt(0)<=90){
  if(item.charCodeAt(0)+13<=90){
    item = String.fromCharCode(item.charCodeAt(0)+13)
    }
  else item = String.fromCharCode(64+(item.charCodeAt(0)+13-90));
}
return item;});
return arr.join('');
}
console.log(rot13("SERR CVMMN!"));

