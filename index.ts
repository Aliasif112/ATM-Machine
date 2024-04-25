import inquirer from "inquirer";
import chalk from "chalk";

// Initialize user balanace and pin code
let myBalance = 5000;
let myPin = 12345;

console.log(chalk.blue("\n \t -----Welcome To ATM Machine-----\n"));

let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:"),
    }
])
if(pinanswer.pin === 12345){
    console.log(chalk.green("\n Pin is Correct, Login Successfully! \n"));
    // console.log(`current account balance is ${myBalance}`);

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.yellow("Select an operation:"),
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ])
    
    if(operationAns.operation === "Withdraw Ammount"){
        let ammountAns =await inquirer.prompt([
            {
                name: "ammount",
                type: "number",
                message: "enter the ammount to withdraw:"
            }
        ])
        if(ammountAns.ammount > myBalance){
            console.log(chalk.red("Insufficent Balance"));
    }
      else{ 
        myBalance -= ammountAns.ammount
        console.log(chalk.blackBright(`\n${ammountAns.ammount} Withdraw Successfully\n`))
        console.log(chalk.green(`\nyour remaing balance is: ${myBalance}\n `))
      }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(chalk.green(`\nyour ammount balance is ${myBalance}\n`));
    }
     
}
else{
    console.log(chalk.red("Pin is Incorrect,Try Again!"));
}
