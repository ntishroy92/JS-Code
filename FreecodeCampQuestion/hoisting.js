// Vaiable hoisting

//  hoisting using var keyword
console.log(a);
var a=5;

//  hoistion using let and const keyword.
// uncomment the both console below to see the  result
//  console.log(b);
 let b= 10;
//  console.log(c);
 const c= 2;


//  function hoisting

normalFunction();
 function normalFunction(){
    console.log("This is normal function");
 }

//  function expression doesn't got hoisted as javascript engine treat them as a variable.
//  functionExpression();
   var functionExpression=function (){
    console.log("This is function expression");
  }

//   arrow function doesn't get hoisted same reason as above.
// arrowFunction();
var arrowFunction = function(){
    console.log("This is arrow function");
}