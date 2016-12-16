//Name: Bryan
//Date: 01/22/2014
//Assignment Conditionals Worksheet

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
// If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit,
// the calculator should convert to Fahrenheit.

//Given:Degrees (in F or C)
//Unit (a string holding an “F” or a “C”)
//Result: “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”



var num = prompt("Please enter numeric value of the temperature you would like to convert");
var unit = prompt("To covert from Fahrenheit to Celsius enter C, To convert from Celsius to Fahrenheit enter F");
	if (unit = "c") {
		var temp = (num - 32) * 5 / 9;
		alert("The temperature is " + temp + " degrees Celsius!");
	} else {
		var temp = (num * 9) / 5 + 32;
		alert("The temperature is " + temp + " degrees Fahrenheit!");
	}