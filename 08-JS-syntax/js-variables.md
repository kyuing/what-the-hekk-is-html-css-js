NOT done

# var 
## scoppe
```javascript
// problem1
var hi = 'hi there';  //global scope

function myFunction() {
  var hello = 'hello there';  //block scope
  console.log(hello);
}
console.log(hi);  //hi there
console.log(hello); //Uncaught ReferenceError: hello is not defined
```

solution
```javascript
var hi = 'hi there';  

function myFunction() {
  var hello = 'hello there';  
  console.log(hello); 
}
console.log(hi);  //hi there
console.log(myFunction());  //hello there
```

## redeclaration and reinitialization (reuse/updated)
```javascript
var hi = 'hi there';  
var hi = 'hello there';
hi = 'hi there again';

console.log(hi);  //hi there again
```
```javascript
hi = 'hi there';  
hi = 'hello there';
hi = 'hi there again';

console.log(hi);  //hi there again
```

<!-- ## loose typing issue with an example
```javascript
  var login = 'failed';
  var maxAttempts = 2;
  // say, hundreds of thousands of codes are here
  if (maxAttempts > 2) {
      var login = 'paid';
  }
  console.log(paymentState) // "unpaid"
``` -->


## hoisting
```javascript
var hi = 'hi there';  
```
```javascript
hi = 'hi there';  
```
```javascript
var hi;  
hi = 'hi there';  
```

```javascript
  console.log(hi) // "undefined"
  var hi = 'hi there';  
```
```javascript
  var hi; //declaration
  console.log(hi) // "undefined"
  hi = 'hi there'; //initializaton 
```
```javascript
  var hi; //declaration
  console.log(hi) // "undefined"
  var hi = 'hi there'; //initializaton 
```

## modification
```javascript
 console.log(hi); // undefined
 var hi = 'hi there'; 
 console.log(hi);  // hi there
```

```javascript
 console.log(hi); // undefined
 hi = 'hi there'; 
 var hi;
 console.log(hi);  // hi there
```

```javascript
 var hi;
 console.log(hi); // undefined
 hi = 'hi there'; 
 console.log(hi);  // hi there
```


# let 
## scoppe
```javascript
function myFunction() {
  let num = 1;  //block scope in a function
  if (num == 1) {
    // block scope in an if statement
    let printMe = 'I got number ' + num;  // 'I got 1'
  }
  console.log(printMe);  // ReferenceError: printMe is not defined
}
myFunction();  // call the function
```
## solution
```javascript
function myFunction() {
  let num = 1;  //block scope in a function
  if (num == 1) {
    // block scope in an if statement
    let printMe = 'I got number ' + num;  // 'I got 1'
    console.log(printMe); // prints 'I got 1'
  }
}
myFunction();  // call the function
```

## reusability
```javascript
function myFunction() {
  let num = 1;  //block scope in a function
  num = 2;
  console.log(num); //prints '2'
}
myFunction();  // call the function
```

```javascript
function myFunction() {
  let num = 1;  // block scope in a function
  num = 2;  
  let num = 1000; // error point
  console.log(num); // SyntaxError: Identifier 'num' has already been declared
}
myFunction();  // call the function
```
## hoisting
```javascript
  console.log(hi); //ReferenceError: hi is not defined
  let hi = 'hi there';  
```


# const
## scoppe
```javascript
function myFunction() {
  const hi = 'hi there';  //block scope in a function
  const hi = 'hi there again'; // SyntaxError: Identifier 'hi' has already been declared
  console.log(hi);   
}
myFunction();  // call the function
```
```javascript
function myFunction() {
  const hi = 'hi there';  //block scope in a function
  hi = 'hi there again'; // TypeError: Assignment to constant variable.
  console.log(hi);   
}
myFunction();  // call the function
```

## solution
```javascript
function myFunction() {
            //12345678 
  const hi = 'hi there';  //block scope in a function
  if (hi.length === 8) {
    const hi = 'hi there in another block';
    console.log(hi); // prints 'hi there in another block'
  }
}
myFunction();  // call the function
```


## const object
```javascript
function myFunction() {
  const transaction = {
    item: "apple",
    price: 2
  };
  console.log(transaction); // { item: 'apple', price: 2 }

  transaction.item = "banana";
  transaction.price = 5;
  console.log(transaction); // { item: 'banana', price: 5 }
}
myFunction();  // call the function
```