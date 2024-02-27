//global variables
let operand1;
let operand2;
let operator;

let topLine = '';
let bottomLine = '';

const add = (a,b) => +a + +b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

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

function updateDisplay(){
    document.getElementById('topLine').textContent = topLine;
    document.getElementById('bottomLine').textContent = bottomLine;
    console.log(`topLine = ${topLine}`);
    console.log(`bottomLine = ${bottomLine}\n`);
}

//set all clear (AC) button function
document.getElementById('all-clear').addEventListener('click', function(){
    topLine = '';
    bottomLine = '';
    updateDisplay();
    // console.log('clicked!');
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
    {element: document.getElementById('multiply'), op:'x'},
    {element: document.getElementById('divide'), op:'/'}
];
//add event to operations
for (let op of operationButtons){
    op['element'].addEventListener('click', function(){
        // topLine += `${bottomLine}<span style="color: red"> ${op['op']} </span>`;
        // let newSpan = document.createElement('span');
        // newSpan.textContent = ` ${op['op']} `;
        // newSpan.setAttribute('style', 'color:red');
        // topLine += bottomLine;
        // topLine.appendChild(newSpan);
        topLine += `${bottomLine} ${op['op']} `;
        bottomLine ='';
        // document.getElementById('topLine').textContent = topLine;
        // document.getElementById('topLine').appendChild(newSpan);
        // document.getElementById('bottomLine').textContent = '';
        // console.log(topLine);
        updateDisplay();
    });
}

//add event to equal sign button
const equalButton = document.getElementById('equals');
equalButton.addEventListener('click',function(){
    topLine += bottomLine;
    let opsArray = topLine.split(' ');
    console.log(opsArray);
    if(opsArray[1]==="x"){
        bottomLine = solve(opsArray[0], "*", opsArray[2]);
    } else{
        console.log('solving...')
        bottomLine = solve(opsArray[0], opsArray[1], opsArray[2]);
    }
    updateDisplay();
});