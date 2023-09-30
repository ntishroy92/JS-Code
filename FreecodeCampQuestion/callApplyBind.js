// Scenario 1 if function is inside an object

let Person={
    "name":"Nitish Roy",
    "age":30,
    printDetails:function (){
        console.log(this.name + " "+this.age +" and Address is"+ this.add );
    }
}
Person.printDetails();

let Person2={
    "name":"Rahul Kumar",
    "age":26,
    
}

// call() is also known as borrowing method. Which means it borrow the method from another object
Person.printDetails.call(Person2);

//  Scenario 2 if function is generic function which means the function does not present inside any object.
 
let obj={
    "fName":"Nitish",
    "lName":"Roy"
}

let printFullName = function (city,state){
    // console.log(this,city,state);
  console.log(this.fName +" "+ this.lName+" from "+city+","+state);
}

printFullName.call(obj,"sheikhpura","bihar");

let obj2={
    "fName":"Putush",
    "lName" :"Roy"
}

printFullName.call(obj2,"patna","bihar");

// The only difference between call and apply is the way it pass the arguments. in call you can pass arguments one by one But in case of apply you can pass
//  as an array.
printFullName.apply(obj2,["Gagaur","Sheikhpura"]);


// and in bind you have to call function explicit. Which means in the case of call & Apply function gets call once we use call or apply
//  but in case  of bind you have to call a function explicit as it return function and assign to the variable.
// and for the passing arguments in bind you can pass one by one. if you are passing as an array it will consider as single argument only.

let callFunction = printFullName.bind(obj,"Bangalore","Karnataka");
let callFunction1 = printFullName.bind(obj2,"Nalanda","Bihar");
callFunction();
callFunction1();