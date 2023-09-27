//   Function Expression
var subs = function(a,b){
    console.log("Subtract :",a-b);
  }
  subs(5,4);


// Function Declaration
function add( a,b){
    console.log("Sum : ",a+b);
 }
  add(4,5);



//   First class Function

function square(num){
    return num*num;
}

function disFunction(fn){
    console.log("Square is: ",fn(5));
}

disFunction(square);


// IIFE Function
(function add(a,b){
    console.log("Sum is :",a+b);
})(2,4);
