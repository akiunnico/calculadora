const add = (num1, num2) => {return num1 + num2;}
const substract = (num1, num2) => {return num1 - num2;}
const multiply = (num1, num2) => {return num1 * num2;}
const divide = (num1, num2) => {return num1 / num2;}

let num1, num2, operator;

const operate = (operator, num1, num2) => {
    switch(operator){
        case "add" : return add(num1, num2);
        break;
        case "substract" : return substract(num1, num2);
        break;
        case "multiply" : return multiply(num1, num2);
        break;
        default: return divide(num1, num2);
    }
}

