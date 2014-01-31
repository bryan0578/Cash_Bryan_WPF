//Name: Bryan Cash
//Date: 1/29/2014
//Assignment: Functions_Industry

//Bonus Calculator - This portion of code will calculate how much money a person can earn for exceeding their production
//goals

//prompt user to input their production goal number and the number of products their packaged in the day

var production = Number(prompt("What was your teams production goal? Please enter the number of products expected to be" +
    " packaged today according to your team's production goal"));
var products = Number(prompt("How many products did you package today?"));

//created ternary condition if production number is less than the number of products alert the user they have exceeded
//their production goals if condition is false alert the user they will not receive a bonus because they have not exceeded
//their production goals

    bonus1 = (production < products) ? "You have exceeded your productions goals for today" : "You have not exceeded" +
        " your production goals for today. You will not receive a bonus at this time";
    alert(bonus1);

//Create a function calBonus to calculate to bonusAmount

function calcBonus(production, products){

    //expression that takes the amount of products and subtracts it from the amount given from the production prompt
    //and multiplies it by .50 cents. This means each product packed over the production goal will result in a .50 cent
    //increase amount towards the users bonus

    var bonusAmount = parseFloat(products - production) * .50

    //return the bonus amount

    return bonusAmount

}

if(production < products){
    var bonusAmount = calcBonus(production, products)
    alert("Your bonus for today is $ " + bonusAmount)
}else{
    alert("You bonus for today is $0.00")
}


