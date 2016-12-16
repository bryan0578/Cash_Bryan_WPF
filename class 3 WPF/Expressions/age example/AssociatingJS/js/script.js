//Expressions

//Name: Bryan Cash
//Assignment: Expressions Worksheet
//Date: 1/14/2014


//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
//Calculate how old Sparky the pit bull is in dog years based on his actual age.

var sparkysAge = 7;

const DOGYEARS = 7;

//multiply SparkysAge and dogAge and assign variable dogYears. Example 7*7=49

var dogAge = sparkysAge * DOGYEARS

//print variables sparkysAge and dogAge

document.write("Sparky is " + sparkysAge + " human years old which is " + dogAge + " in dog years!");



//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza
//each party-goer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing
//the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

var students = 20;
var pizza = 10;
const SLICES = 8;

//Multiply pizza and slices and then divide by students. Example 10*8=80 80/20=4 or 10*8/20=4

var slicePerStudent = pizza * SLICES / students;

//Print variable slicePerStudent

document.write("Each person ate " + slicePerStudent + " slices of pizza at the party.");


//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been
//divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
//Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2
//slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers
//I put in for those given variables.)

var students = 20;
var pizza = 10;
var slicePerStudent = 4;


//multiply var pizza and const slices, then multiply the var students and the slicePerStudent, using parenthesis to make
//sure that the first multiplication is separate from the second multiplication and subtract the result of pizza and
//slices from the result of students and slicePerStudent to find sparky's leftovers. Example (10*8)-(20*4)=0

var leftovers = (pizza * SLICES) - (students * slicePerStudent);

//print variable leftovers

document.write("Sparky got " + leftovers + " slices of pizza");

//poor sparky doesn't get any pizza



//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the
//past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the
//items in the array to calculate the average amount spent on groceries.
//Please note: there should only be one given for this problem set, the array holding the five weekly totals.
// You should be able to access the array using the array access notation discussed earlier in the course.

var weeklyGroceries = [120, 90, 110, 85, 210];

//Use order of operations to perform addition of array string weeklyGroceries and divide by the number of strings inside
//the array. Example (120+90+110+85+210)/5

var total = weeklyGroceries[0] + weeklyGroceries[1] + weeklyGroceries[2] + weeklyGroceries[3] + weeklyGroceries[4]
var average = total / 5;

//print variables total and average

document.write("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average +
    " per week");


//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and
//without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for
//example.)

var price = 59.98;
var discountPercent = 30;
var taxPercent = .06;
var item = "jacket";

// calculate the percent of 30. Example 30 / 100 = .3

var discountResult = 30 / 100;

//Use order of operations to calculate variables subtotal and total. To calculate the subtotal I need to multiply the
//price by the discountResult first and then subtract the result from the original price. To calculate the total with
//tax I need to multiply the subtotal and the taxPercent and then subtract the result from the subtotal.


var subtotal = price - (price * discountResult);
var total = subtotal + (subtotal * taxPercent);

//Print variables item, price, discountPercent, subtotal and total.

document.write("Your " + item + " was originally $" + price + " ,but after a " + discountPercent + "% discount, it is now"
    + " $" + subtotal + " without tax, and $" + total + " with tax.");




