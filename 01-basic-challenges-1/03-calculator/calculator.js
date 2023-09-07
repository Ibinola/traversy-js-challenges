function calculator(num1, num2, operator) {
    if(operator == "+"){
        return num1 + num2;
    }
    if(operator == "-"){
        return num1 - num2;
    }
    if(operator == "*"){
        return num1 * num2;
    }
    if(operator == "/"){
        return num1 / num2;
    }
    if(operator !== "+" || operator !== "-" || operator !== "*" || operator !== "/"){
        return "Invalid operator"
    }
}

module.exports = calculator;
