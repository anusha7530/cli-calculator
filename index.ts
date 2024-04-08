import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main() : void
{
    const firstStr : string = question("Enter first number:\n");
    const operator : string = question("Enter operator:\n");
    const secondStr : string = question("Enter second number:\n");
    
    const validInput : boolean = isNumber(firstStr) && isOperator(operator) && isNumber
    (secondStr);

    if(validInput)
    {
        const first : number = parseInt(firstStr);
        const second : number = parseInt(secondStr);
        const result = calculate(first,operator  as Operator,second);
        console.log(result);
    }
    else 
    {
        console.log("\nInvalid Input:)\n");
        main();
    }
}

function calculate(first : number, operator: Operator, second: number)
{
    switch(operator)
    {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
    }
}

function isOperator(operator : string) : boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str : string) : boolean
{
    const mayBeNum = parseInt(str);
    const isNum : boolean = !isNaN(mayBeNum);
    return isNum
}

main();