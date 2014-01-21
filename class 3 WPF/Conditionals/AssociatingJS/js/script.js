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

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//If the iPhonePrice is less than our budget AND our paycheck is greater than 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}

//Conditionals Screen cast Ternary Operators

var gpa =48;

//if gpa is over the min 2.0 score, the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("Gpa is too low");
}*/

(gpa > 2.0) ? console.log("You can graduate") : console.log("Gpa is too low");

var age = 6;
var book;

//if the child is < 10 they will get Green Eggs and Ham, otherwise they will get The Time Machine
/*if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);*/

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);