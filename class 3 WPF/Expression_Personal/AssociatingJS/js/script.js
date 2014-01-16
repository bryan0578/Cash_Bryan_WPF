//Name:Bryan Cash
//Date:1/16/2014
//Assignment: Expressions


//Expression_Personal:This program source code is meant to take in data from user prompts to calculate how much money
//would have left over each month to spend on entertainment or savings


//Set up all variables with descriptive prompts to ensure the user can easliy interperet what is being asked of them
//and made sure all prompts can be represented by numbers by casting the word number in front of the string variable

var monthlyPay = Number(prompt("Please enter the exact amount of your monthly income, if there is no income please enter 0"));
var rent = Number(prompt("Please enter the amount you pay for rent each month. If you do not pay rent please enter 0"));
var utilities = Number(prompt("Please enter the COMBINED total of all your utility bills. If you do not pay any utilities," +
    "please enter 0"));
var groceries = Number(prompt("Please enter the amount of your monthly average grocery spending. If you do not pay for" +
    "groceries, please enter 0"));
var gas = Number(prompt("Please enter the amount of your monthly average spent on gasoline. If you ride the bus you may enter" +
    "your monthly average in bus fair. Otherwise please enter 0"));
var car = Number(prompt("Please enter your monthly car payment, if you do not pay a car payment, please enter 0"));
var mortgage = Number(prompt("Please enter your monthly mortgage payment, if you do not pay a mortgage please enter 0"));
var personalLoans = Number(prompt("Please enter your monthly amount is personal or student loans. If you have more than one please" +
    "the COMBINED total of all loans, otherwise please enter 0"));
var cellPhone = Number(prompt("Please enter your monthly cellphone payment. If you do not have a cellphone please enter 0"));
var neccessities = Number(prompt("Please enter the average amount that you spend on neccessities, such as cleaning products, " +
    "haircut, medicine, cloths, ect. "));

//Set up partial expression to calculate living expenses and travel expenses and casted number in from of the string
//variable to make sure the variable is represented as a number

var livingExpenses = Number(rent + utilities + mortgage + groceries + neccessities);
var travelExpenses = Number(gas + car);

//Finsished the expression to calculate how much the bills are total by adding the all together using casting to treat
//string variable as a number and subtracting variable monthly pay from the rest. This could be simplified by taking
//monthlyPay variable and subtracting it from var y, but I wanted to show the order of operations on how it would be done
//if I did not need variable y to stand alone as its own variable.

var x= Number(monthlyPay) - Number(livingExpenses + travelExpenses + personalLoans + cellPhone);
var y = Number(livingExpenses + travelExpenses + personalLoans + cellPhone);


alert("Your total amount in bills are $" + y + " this leaves you with a total of $" +  x + " to use for savings" +
    " or entertainment");

console.log ("Your total amount in bills are $" + y + " this leaves you with a total of $"
    + x + " to use for savings" + " or entertainment" );