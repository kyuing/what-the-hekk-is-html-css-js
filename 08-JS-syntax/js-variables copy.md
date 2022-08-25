NOT done

# var 

```javascript
// attempt 1
var num = 1;
console.log(num);

var num = 2;
console.log(num);

// The output
1
2

// attempt 2
var num = 1;

num = 2; //var num = 2;
console.log(num);

// output
2
```

# let 

```javascript
// attempt 1
let num = 1;
console.log(num);

let num = 2;
console.log(num);

// error
Uncaught SyntaxError: Identifier 'num' has already been declared

// attempt 2
let num = 1;

num = 2;
console.log(num);

// error
Uncaught SyntaxError: Identifier 'num' has already been declared
```

# const 

```javascript
// attempt 1
const num = 1;
console.log(num);

const num = 2;
console.log(num);

// error
Uncaught SyntaxError: Identifier 'num' has already been declared

// attempt 2
const num = 1;
// console.log(num);

num = 2;
console.log(num);

// error
Uncaught SyntaxError: Identifier 'num' has already been declared
```