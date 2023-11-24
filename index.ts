import * as inquirer from "inquirer";
import * as chalk from "chalk";

//calculator operators

enum operator
{
    ADD = "addition",
    SUBTRACT = "subtraction",
    DIVIDE = "division",
    MULTIPLY = "multiplication",
}
const prompt = inquirer.createPromptModule();
function validateNumber(input:string):Boolean|string
{
    if(isNaN(parseFloat(input))){
        return "please enter a valid number";
    }
    return true;
}
async function main() 
{
    const input = await prompt([
        {
        type: "input",
        name: "num1",
        message: "enter the first number",
        validate: validateNumber,
        },
        {
        type: "list",
        name: "operator",
        message: "enter the operator",
        choices: Object.values(operator),
        },
        {
        type: "input",
        name: "num2",
        message: "enter the second number",
        validate: validateNumber,
        },
    ])
    const num1=parseFloat(input.num1);
    const num2=parseFloat(input.num2);
    const selectedOperator= input.operator as operator;
    let result: number;
    if (selectedOperator === operator.ADD)
    {   
        result= num1 + num2;
        console.log(`this is the answer ${result}`);
    } else if (selectedOperator === operator.SUBTRACT){
        result= num1 - num2;
        console.log(`this is the answer ${result}`);
    }else if (selectedOperator === operator.DIVIDE){
        result= num1 / num2;
        console.log(`this is the answer ${result}`);
    }else if (selectedOperator === operator.MULTIPLY){
        result= num1 * num2;
        console.log(`this is the answer ${result}`);
    
    }
}
main();