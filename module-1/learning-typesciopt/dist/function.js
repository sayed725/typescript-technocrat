"use strict";
// Function
// arrow function , normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(12, 12);
const addArrow = (num1, num2) => num1 + num2;
addArrow(12, 12);
//object => function => method
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(100000);
const arr = [1, 4, 6];
const sqrArray = arr.map((elem) => elem * elem);
console.log(sqrArray);
