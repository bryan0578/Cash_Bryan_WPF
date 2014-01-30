

//Name: Bryan Cash
//Date: 1/29/2014
//Assignment: Functions Worksheet

//The Circumference of the Circle
//Created an anonymous function with var cir, setting the parameter as radius
var cir = function(radius){
    //code that runs the function 2 * PI * the radius
    var c  = 2 * Math.PI * radius
    //return the circumference of the circle
    return c
}
//Invoke the function setting the radius parameter as 20
var a = cir(20);
//Print the result of the function in the console
console.log("The circumference of the circle is " + a);


//The amount of bee stings to kill a 300 lb moose
//Create an anonymous function with var moose, set the parameter as weight
var moose = function(weight){
    //code that runs the function 300 lbs * the amount of bee stings per pound
    var beeStings = weight * 8.666666667
    //return the amount of bee stings it would take to kill a 300 lb moose
    return beeStings
}
//Invoke function setting the weight radius as 300
var a = moose(300);
//Print the result of the function in the console
console.log("It takes " + a + " to kill this animal");
