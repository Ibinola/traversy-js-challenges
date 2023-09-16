function calculator(num1, num2, operator) {
    // if(operator == "+"){
    //     return num1 + num2;
    // }
    // if(operator == "-"){
    //     return num1 - num2;
    // }
    // if(operator == "*"){
    //     return num1 * num2;
    // }
    // if(operator == "/"){
    //     return num1 / num2;
    // }
    // if(operator !== "+" || operator !== "-" || operator !== "*" || operator !== "/"){
    //     return "Invalid operator"
    // }
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "*":
            result = num1 * num2
            break;
        default:
            throw new Error("Invalid Operator")
    }

    return result;
}

module.exports = calculator;
