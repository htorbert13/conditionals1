number1 = prompt("Enter your first number: ");

if (isNaN(number1)) {
  console.log("This is not a number");
} else {
  operator = prompt("Enter an operator (+, -, *, /, %: ");
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/" &&
    operator !== "%"
  ) {
    console.log("This is not an operator");
  } else {
    number2 = prompt("Enter your second number: ");

    var num1 = Number(number1);
    var num2 = Number(number2);
    if (isNaN(number2)) {
      console.log("This is not a number");
    } else if (operator == "+"){
    document.querySelector(".condition").innerHTML = (num1 + num2);
    }
    else if (operator == "-"){
      document.querySelector(".condition").innerHTML = (num1 - num2);
    }
    else if (operator == "*"){
      document.querySelector(".condition").innerHTML = (num1 * num2);
    }
    else if (operator == "/"){
      document.querySelector(".condition").innerHTML = (num1 / num2);
    }
    else if (operator == "%"){
      document.querySelector(".condition").innerHTML = (num1 % num2);
    }
    
  }
}