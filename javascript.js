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

function updateDisplay(){
    document.getElementById('topLine').textContent = topLine;
    document.getElementById('bottomLine').textContent = bottomLine;
}

//set all clear (AC) button function
document.getElementById('all-clear').addEventListener('click', function(){
    topLine = '';
    bottomLine = '';
    updateDisplay();
    console.log('clicked!');
});

//set number buttons' functions
const numbers = [
    {element:document.getElementById('one'), number: 1},
    {element:document.getElementById('two'), number: 2},
    {element:document.getElementById('three'), number: 3},
    {element:document.getElementById('four'), number: 4},
    {element:document.getElementById('five'), number: 5},
    {element:document.getElementById('six'), number: 6},
    {element:document.getElementById('seven'), number: 7},
    {element:document.getElementById('eight'), number: 8},
    {element:document.getElementById('nine'), number: 9},
    {element:document.getElementById('zero'), number: 0}
];

//add events to numbers
for (let num of numbers){
    num['element'].addEventListener('click', function(){
        bottomLine += num['number'];
        updateDisplay();
    });
};

//set operations' buttons
const operationButtons = [
    {element: document.getElementById('plus'), op:'+'},
    {element: document.getElementById('minus'), op:'-'},
    {element: document.getElementById('multiply'), op:'*'},
    {element: document.getElementById('divide'), op:'/'}
];
//add event to operations
for (let op of operationButtons){
    op['element'].addEventListener('click', function(){
        topLine += bottomLine + ' ' + op['op'] + ' ';
        bottomLine ='';
        updateDisplay();
    });
}