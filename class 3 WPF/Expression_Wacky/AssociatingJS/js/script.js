//Name: Bryan Cash
//Assignment: Expressions
//Date: 1/16/2014

//Expressions_Wacky: Program that will calculate the surface area of two rectangles and add them together. Why would we need
//to know the surface area of two rectangles added together?.....Beats me, but I thought it was pretty wacky!

//Starts off asking for user input, favorite character, plant and ship from the movie Star Wars outputs a little joke
//about the program

var character = prompt("Please enter your favorite Star Wars character");

alert("Please do NOT choose Jar Jar Binks");

var planet = prompt("Please enter a planet from the Star Wars Universe");
var ship = prompt("Please enter you favorite space ship from any of the Star Wars movies");

//Used alert to deliver a little punch-line for the joke

alert("If you were " + character + " flying the " + ship + " to " + planet + " you would not need to figure out how " +
    "add the  surface areas of two rectangles");

alert("Ok enough nonsense let's get to work");

//Added variables width and height and length along with width1 and height1 and assigned them prompts that are casted as numbers

var width = Number(prompt("Please enter the width of the first rectangle in inches"));
var height = Number(prompt("Please enter the height of the first rectangle in inches"));
var length = Number(prompt( "Please enter the length og the first rectangle in inches"));

var width1 = Number(prompt("Please enter the width of your second rectangle in inches"));
var height1 = Number(prompt("Please enter the height of your second rectangle in inches"));
var length1 = Number(prompt("Please enter the length of you second rectangle in inches"));

//To find the surface area of a rectangle we need to use the formula 2lw + 2lh +2wh, if we need to add the area of two rectangles
//we need to add each individual rectangle's width and height first then add the results together following the order
//of operations. I also casted these variables to a Number so that the computer treats the variable as a number and
//not a string

var surfaceArea = Number(((2 * (width * length)) + (2 * (length * height)) + (2 * (width * height))) + ((2 * (width1 * length1))
    + (2 * (length1 * height1)) + (2 * (width1 * height1))));

//I incorporated the user input variables in the alert along with the answer to the expression to tie everything up nice

alert("Ok " + character + " flying the " + ship + " to " + planet + " the surface area of both rectangles added together are " +
    surfaceArea + "inches");

//Print out variables character, ship, planet, and area to test calculation and joke combined

console.log("Ok " + character + " flying the " + ship + " to " + planet + " the surface area of both rectangles added together are " +
    surfaceArea + "inches");
