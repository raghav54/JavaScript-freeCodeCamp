var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let arr = firstAndLast.split(' ');
  let firstName = arr[0];
  let lastName = arr[1];
  this.getFullName = function() {
    return firstName+' '+lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(x) {
    firstName = x;
  };
  this.setLastName = function(x) {
    lastName = x;
  };
  this.setFullName = function(x) {
    let arr = x.split(' ');
    firstName = arr[0];
    lastName = arr[1];
  };
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());
