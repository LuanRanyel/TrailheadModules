var myVar = 1;
function myFunc() {
  var myVar = 2;
  console.log(myVar); 
}
myFunc();
console.log(myVar);


var myVar = 1;
if (true) {
  var myVar = 2;
  console.log(myVar);
}
console.log(myVar);


// Let Is the New Var

// The use of let is always recommended over var.
// - Variables assigned with let are always block scoped.
// - Variables assigned this way also cannot be hoisted.

/////////////////////////////////////////////////////////////////

// And There's Also Const
/*
const BRANDCOLOR;
console.log(BRANDCOLOR);
*/

// Since const values cannot be reassigned, they must be initialized at the time they are declared.

// And here is something that tends to trip up developers: Constants are not immutable. This means that it is possible to modify the properties of objects or arrays assigned with const. For example, if you declare an object such as this:
const BRANDCOLOR = {
    primary: "blue",
    accent: "teal"
}

BRANDCOLOR.accent = 'gray';

console.log(BRANDCOLOR);

/*
let firstName = 'John', lastName = 'Doe';
let user = {
  firstName : firstName,
  lastName : lastName
}
console.log(user);
*/

let firstName = 'John', lastName = 'Doe';
let user = { firstName, lastName };
console.log(user); 

/*
let numbers = [1, 2, 3, 4]; 
let one = numbers[0],
  two = numbers[1],
  three = numbers[2],
  four = numbers[3];
console.log(one); 
*/

let numbers = [1, 2, 3, 4]; 
let [one, two, three, four] = numbers;
console.log(one);

let userExample = 'Me';
console.log(`The following 'user', ${userExample} has encountered an "error".`);