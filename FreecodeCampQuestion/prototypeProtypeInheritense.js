/*
we can achieve prototypal inheritence through __proto__.
Through this property of one object can get access of other object. Below is the example
*/

const obj={
    name:"nitish",
    dispName:function(){
        console.log("Name is "+this.name);
    }
}

obj.dispName();

const obj2={
    age:30,
    name:"Putush",
    __proto__:obj,
    dispage:function(){
        console.log("age is "+this.age);
    }
}
obj2.dispName();
obj2.dispage();
 /*
 In above example  we are accessing the function of obj for obj2. and as that function is printing the 
 value of name. In case if name is not there it will inherit the name proprty of obj. and if name is present
 in obj2 then it will point to name property of obj2. Actually first it check the name property in it's own object
 if it doesnot find name then it will point to it's parent object.

 */