

//function 
const addNumbers =(a, b) => {
    return a + b 
}

console.log(addNumbers(5, 3));


function greet(ten) {
    return "hello, " + ten + "!"; 
}

console.log (greet(8)); 

const greet2 = (ten) => {
    return "hello, " + ten + "!";
}

console.log (greet2('nhu')); 

//3 
const greetUser1 = (ten) => {
    return `hello, ${ten}`;
}

const greetUser = () => {
    return `hello Guests`
}

console.log (greetUser1("John"));
console.log(greetUser()); 

// 4 Function with Rest Parameter:Write a function called average that 
//takes any number of parameters and returns the average of those numbers.


const average = (... nums) => {
    let sum =0 ; 
    let dem =0;
    for (const num of nums) {
        sum += num; 
        dem ++;
    }
    if(dem == 0 ) return 0; 
    else return sum/ nums.length ; 
}

console.log(average(4, 6, 8)); 
console.log(average(1, 2, 3, 4, 5)); 


//5 Function with Callback:Write a function called calculate that takes three parameters: num1, num2, and a callback function. The callback function should 
//perform a mathematical operation on num1 and num2 and return the result.

const add = (a, b) => {
    return a+b; 
}
const sub = (a,b ) => {
    return a-b; 
}
const calculate = (num1, num2, callbackfunc) => {
    return callbackfunc(num1, num2);
}

console.log(calculate(5, 3, add)); 
console.log(calculate(5, 3, sub)); 

// 6Function as Object Property:Create an object called mathOperations with 
//properties add, subtract, multiply, and divide, each containing an arrow function that performs the 
//respective mathematical operation.

const mathOperations = {
    add: (a, b) => a +b, 
    subtract: (a, b) => a - b, 
    multiply: (a, b) => a * b, 
    divide: (a, b) => a/b
}; 


console.log(mathOperations.add(5, 9)); // 
console.log(mathOperations.subtract(5, 0)); // 


//function and foreach 
//1. Write a Function to Double the Numbers:
// Write a function called doubleNumbers that takes an 
// array of numbers as input and doubles each number
//  using the forEach method.


const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = (numbers) => {
    // numbers.forEach(function(num) {
    //     console.log(num*2); 
    // }) 

    numbers.forEach((num) => {
        console.log(num*2); 
    })
}
 
doubleNumbers(numbers); // Output should be [2, 4, 6, 8, 10]


// 2. Write a Function to Square the Numbers:Write a function called squareNumbers that takes an array of numbers as 
// input and squares each number using the forEach method.

const squareNumbers = (numbers2) => {
    numbers2.forEach((num, index) => {
        numbers2[index] = num * num; 
    });
    return numbers2;
}

const numbers2 = [1, 2, 3, 4, 5];
const result = squareNumbers(numbers2); // Output should be [1, 4, 9, 16, 25]
result.forEach((i, index) => {
    console.log( index, i)
}) 