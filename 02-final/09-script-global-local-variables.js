// This is a global variable
var number = 100;

function ourThird() {
  var number = 500; // Using var in front of number creates a local variable
  
  console.log(number); // So this now returns 500
}

ourThird(); // Calls the function

console.log(number); // This calls the global variable and it’s still 100.
number = 500; // Now the global variable is set to 500

console.log(number);