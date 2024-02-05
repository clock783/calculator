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

const numbers = [
    {element:one, number: 1},
    {element:two, number: 2},
    {element:three, number: 3},
    {element:four, number: 4},
    {element:five, number: 5},
    {element:six, number: 6},
    {element:seven, number: 7},
    {element:eight, number: 8},
    {element:nine, number: 9},
    {element:zero, number: 0}
];

console.log(numbers[0]['element']);
//add events to numbers
for (let num of numbers){
    // console.log(numbers[num], typeof num);
    // console.log(num['element']);
    num['element'].addEventListener('click', function(){
        bottomLine += num['number'];
        updateDisplay();
    });
};

function updateDisplay(){
    document.getElementById('topLine').textContent = topLine;
    document.getElementById('bottomLine').textContent = bottomLine;
}

// console.log('tests');