//global variables
let operand1;
let operand2;
let operator;

let topLine = '';
let bottomLine = '';

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

//set all clear (AC) button function
document.getElementById('all-clear').addEventListener('click', function(){
    topLine = '';
    bottomLine = '';
    updateDisplay();
    console.log('clicked!');
});


//set number buttons' functions
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

function updateDisplay(){
    document.getElementById('topLine').textContent = topLine;
    document.getElementById('bottomLine').textContent = bottomLine;
}

// console.log('tests');