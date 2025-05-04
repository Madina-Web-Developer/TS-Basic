"use strict";
// Function in Ts 
// ----- Normal Function 
function add(num1, num2) {
    return num1 + num2;
}
// ----- Arrow Function
const addArrow = (num1, num2) => num1 + num2;
// Object --> function --> method
const poorUser = {
    name: 'Madina',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
const arr = [11, 24, 30];
const newArray = arr.map((elem) => elem * elem);
