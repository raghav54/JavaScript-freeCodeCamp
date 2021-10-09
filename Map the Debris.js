function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(item => item['avgAlt'] = Math.round(2*Math.PI*Math.sqrt((Math.pow(item.avgAlt + earthRadius,3)/GM))));
  arr.map(item => {
    item.orbitalPeriod = item.avgAlt;
    delete item.avgAlt;
  });
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 413.6}]));
