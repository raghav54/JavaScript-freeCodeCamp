function convertToRoman(num) {
 let str = num.toString();
 let arr = str.split('');
 let ones = parseInt(arr[arr.length-1]);
 let tens = parseInt(arr[arr.length-2]);;
 let hund = parseInt(arr[arr.length-3]);;
 let thou = parseInt(arr[arr.length-4]);;
 let result = '';
 for(let i = 0; i<thou;i++) result = result+'M';
 if(hund-5>=0 && hund!=9) { result = result+'D';
 hund = hund-5;
 for(let i = 0; i<hund;i++) result = result+'C';}
 else if (hund == 9){
   result = result + 'CM';
 }
 else if (hund == 4) {
   result = result+ 'CD';
 }
 else {
   for(let i = 0; i<hund;i++) result = result+'C';
 }
  if(tens-5>=0 && tens!=9) { result = result+'L';
 tens = tens-5;
 for(let i = 0; i<tens;i++) result = result+'X';}
 else if (tens == 9){
   result = result + 'XC';
 }
 else if (tens == 4) {
   result = result+ 'XL';
 }
 else {
   for(let i = 0; i<tens;i++) result = result+'X';
 }
 if(ones-5>=0 && ones!=9) { result = result+'V';
 ones = ones-5;
 for(let i = 0; i<ones;i++) result = result+'I';}
 else if (ones == 9){
   result = result + 'IX';
 }
 else if (ones == 4) {
   result = result+ 'IV';
 }
 else {
   for(let i = 0; i<ones;i++) result = result+'I';
 }
return result;
 
}

console.log(convertToRoman(999));
