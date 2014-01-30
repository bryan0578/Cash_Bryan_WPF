/**
 * Created by bryancash on 1/29/14.
 */
// JavaScript Document

//Name: Bryan Cash
//Date: 1/28/2014
//Assignment: Functions Assignment


    //Finances

    //This program allows a user to enter his or her total assets and add and subtract from them to keep track
    //of their money


//Set up an anonymous function with the variable balance and the function with the parameters set to assets, add and sub
//variables so that when users enter their data it will be caught in the parameters and entered into the function

var balance = function (assets, add, sub){

    //code that takes the user's assets and adds the amount that the user enters that will increase their assets and then
    //subtracts the spending.

    var newBalance = (assets + add - sub)

    //The return value is the variable newBalance
    return newBalance
}

function finance(){
var assets = parseFloat(prompt("Please enter total amount of money in assets"));

assets == Number

while(isNaN(assets)){
    alert("Please enter a valid number");
    parseFloat(prompt("Please enter total amount of money in assets"));

    break
}


var add = parseFloat(prompt("Please enter total amount to add to assets"));

add == Number

while(isNaN(add)){
    alert("Please enter a valid number");
    parseFloat(prompt("Please enter total amount to add to assets"));

    break
}


var sub = parseFloat(prompt("Please enter the total amount spent from assets"));

sub == Number

while(isNaN(sub)){
    alert("Please enter a valid number");
    parseFloat(prompt("Please enter the total amount spent from assets"));

    break
}


var newBalance = balance(assets, add, sub);

     (newBalance == Number);
    while(isNaN(newBalance)){
        alert("Something went wrong!")

        break
    }

        alert("Your new balance is $" + newBalance);
        console.log(newBalance);


}


finance();