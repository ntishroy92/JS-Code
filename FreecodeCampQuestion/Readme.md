-- Function declaration is a simple function that does not requiure any variable to store and the  
   function have a name.
-- Function expression is a anynomous function that is assigned to a variable.

-- First Class function that is treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function 

-- IIFE is also known as immediate invoked function. This function is called as soon as we declare that function.There is no need to call function explicitly like other normal function.

 ========
 Hoisting
 ========
 -- JavaScript hoisting occurs during the creation phase of the execution context that moves the variable and function declarations to the top of the script.           
 ---When the JavaScript engine executes the JavaScript code, it creates the global execution context. The 
global execution context has two phases:
    Creation
    Execution
During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This is known as hoisting in JavaScript.

-- When you try to acceess the var variable  before it's declaration. the v8 engine move declaration part to top and assign undefined to that varaible.
-- when you try to access let or const variable before it's declaration. the v8 engine move dclaration part at top but doesnot assign any value to these variable. so, this will give error.
-- The variables are hoisted to the top of the scope they are declared in (local, global, or block), but are not accessible because they have not been initialized. This concept is also referred to as the Temporal Dead Zone.
-- The JavaScript engine doesn’t hoist the function expressions and arrow functions.

