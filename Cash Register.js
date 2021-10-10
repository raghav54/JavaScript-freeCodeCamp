function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let amount = 0;
  amount = cid.reduce((amount,item) => amount + item[1],0);
  if(amount == change){
    return {status: "CLOSED", change: [...cid]}
  }
  else if (amount < change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  const currency = {
"PENNY" : 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  let x = (change + '').split('.');
  let integer = x[0];
  let decimal = x[1];
  if(decimal<10) decimal *= 10;
  let penny = 0;
  let nickel = 0;
  let quarter = Math.floor(decimal/25);
  decimal -= 25*quarter;
  let dime = Math.floor(decimal/10);
  decimal -= dime*10;
  nickel = Math.floor(decimal/5);
  penny = decimal - nickel;
let intOnes = 0;
let intTens = 0;
let intHund = 0;
let arr = integer.toString().split('');
intOnes = parseInt(arr[arr.length-1]);
intTens = parseInt(arr[arr.length-2]);
intHund = parseInt(arr[arr.length-3]);
let hundredd = intHund;
let twentyd = Math.floor(intTens/2);
while(twentyd * currency.TWENTY > cid[7][1]) {
  twentyd--;
}
let tend = intTens - twentyd*2;
while(tend * currency.TEN > cid[6][1]) {
  tend--;
}
let fived = Math.floor(intOnes/5);
let oned = intOnes - fived*5;
fived += (parseInt(arr[arr.length-2]) - twentyd*2 - tend)*2;
while(fived * currency.FIVE > cid[5][1]) {
  fived--;
}


let result = [["PENNY", penny],
  ["NICKEL", nickel],
  ["DIME", dime],
  ["QUARTER", quarter],
  ["ONE", oned],
  ["FIVE", fived],
  ["TEN", tend],
  ["TWENTY", twentyd],
  ["ONE HUNDRED", hundredd]];
  result = result.map(item => {
    if (!item[1]){
         item[1]=0;
    }
    else item[1] = item[1]*currency[item[0]];
    return item;
  });
  if(result.every((item,i) => item[1] <= cid[i][1])){
  result = result.filter(item => item[1]!= 0);
  return {status: "OPEN", change: result.reverse()};
  }
else return {status: "INSUFFICIENT_FUNDS", change:[]};

}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
