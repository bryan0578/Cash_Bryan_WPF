//Name: Bryan Cash
//Assignment: Expressions
//Date: 1/16/2014

//Expressions_Wacky

var character = prompt("Please enter your favorite Star Wars character")
alert("Please do NOT choose Jar Jar Binks")
var planet = prompt("Please enter a planet from the Star Wars Universe")
var ship = prompt("Please enter you favorite space ship from any of the Star Wars movies")

alert("If you were " + character + " flying the " + ship + " to " + planet + " you would not need to figure out how " +
    "add the areas of two rectangles")

alert("Ok enough nonsense let's get to work")

var width = Number(prompt("Please enter the width"))
var height = Number(prompt("Please enter the height"))

var width1 = Number(prompt("Please enter the width of your second rectangle"))
var height1 = Number(prompt("Please enter the height of your secong rectangle"))

var area = Number((width + height) + (width1 + height1))

alert("Ok " + character + " flying the " + ship + " to " + planet + " the area of both rectangles added together are " +
    area)
