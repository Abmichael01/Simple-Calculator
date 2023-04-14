let calculate = confirm("Hey, do you want to perform some simple arithmetics");
let operators = ["+", "-", "*", "/"]
if (calculate){
    alert("The available operators are: (+) (-) (*) (/)");
    let firstNumber = prompt("Enter the first number");
    while(isNaN(firstNumber)){
        alert("CALCULATOR\n\n**PLEASE ENTER A VALID NUMBER**");
        firstNumber = prompt("Enter the first number");
    }
    let operator = prompt("Enter the operator");
    while(operators.includes(operator)=== false){
        alert("CALCULATOR\n\n**PLEASE ENTER A VALID OPERATOR\nThe available operators are: (+) (-) (*) (/)**".toUpperCase());
        operator = prompt("Enter the operator");
    }
    let secondNumber = prompt("Enter the Second number");
    while(isNaN(secondNumber)){
        alert("CALCULATOR\n\n****PLEASE ENTER A VALID NUMBER**".toUpperCase());
        secondNumber = prompt("Enter the Second number");
    }

    let no1 = Number(firstNumber.trim());
    let no2 = Number(secondNumber.trim());
    let op = operator.trim();
    let sum = no1 + no2;
    let sub = no1 - no2;
    let mult = no1 * no2;
    let div = no1 / no2;

    
    let answer = 
    op === "+"
    ? sum
    :op === "-"
    ? sub
    :op === "*"
    ? mult
    :div;
    alert(answer)
    
}else{
    alert("ok maybe next time");
}