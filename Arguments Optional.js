function addTogether(...x) {
  if (x.length == 1 && typeof x[0] == 'number')
  return function(y) {
    if (typeof y == 'number')
    return x[0]+y;
    else
    return undefined;
  };
  else if (typeof x[0] == 'number' && typeof x[1] == 'number') return x[0]+x[1];
  else return undefined;
}

console.log(addTogether(2,3));
