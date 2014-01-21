//Conditionals Screen cast Follow-along

var oldEnough = true;

//if the chile is old enough, then print to the console "You can ride!"

if(oldEnough){
    //code performed if condition is true
    console.log("You can ride the coaster");
}

//Conditionals Screen cast Relational Expressions

var kidHeight = 40;
var minHeight = 48;

//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster");
}

//Conditionals Screen cast Conditions with Expressions

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the kid is over 48 inches in height

if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster");
}

//Conditionals Screen cast If and Else

var kidHeight = 52;
var minHeight = 48;

//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}

//Conditionals Screen cast Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//If the iPhonePrice is less than our budget AND our paycheck is greater than 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!")
}else{
    console.log("No phone for you!")
}




