//  Pollyfill for apply

Function.prototype.myCall = function (context={}, ...args){
    if(typeof this !=="function"){
        throw new Error(this +"It's not a function");
    }
    context.fn = this;
    context.fn(...args);

}

// Polyfill for apply()

Function.prototype.myApply= function(context={},args=[]){
if (typeof this !== "function")
throw new Error(this +" is not function");
if(!Array.isArray(args))
throw new Error("Provide argument as an array")
context.fn=this;
context.fn(...args);
}


// Pollyfill for bind

Function.prototype.myBind = function(context={},...args){
    if(typeof this !=="function")
    throw new Error(this +"is not a function");
context.fn = this;
return function(...newArgs){
    return context.fn(...args,...newArgs);

};
};
 