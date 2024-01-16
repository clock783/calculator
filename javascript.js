//global variables
let operand1;
let operand2;
let operator;

//create function to solve arithmetic with two operands and one opertor
function solve(a, operator, b){
    let operation = {
        '+': add(a,b),
        '-': subtract(a,b),
        '*': multiply(a,b),
        '/': divide(a,b)
    };
    return operation[operator];
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


//testing commit
