import { add, subtract, multiply, divide } from './calculator.js';

const firstNumber = 10;
const secondNumber = 5;

console.log('Calculator');

console.log('Addition:', add(firstNumber, secondNumber));
console.log('Subtraction:', subtract(firstNumber, secondNumber));
console.log('Multiplication:', multiply(firstNumber, secondNumber));
console.log('Division:', divide(firstNumber, secondNumber));
