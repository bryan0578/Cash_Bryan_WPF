//Name: Bryan Cash
//Date: 1/29/2014
//Assignment: Functions_Industry

//Bonus Calculator - This portion of code will calculate how much money a person can earn for exceeding their production
//goals

var production = Number(prompt("What was your teams production goal? Please enter the number of products expected to be" +
    " packaged today according to your team's production goal"));
var products = Number(prompt("How many products did you package today?"));


    bonus1 = (production < products) ? "You have exceeded your productions goals for today" : "You have not exceeded" +
        " your production goals for today. You will not receive a bonus at this time";
    alert(bonus1);

function calcBonus(production, products){
    var bonusAmount = parseFloat(products - production) * .50
    return bonusAmount

}

if(production < products){
    var bonusAmount = calcBonus(production, products)
    alert("Your bonus for today is $ " + bonusAmount)
}else{
    alert("You bonus for today is $0.00")
}


