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

//Created a normal named function finance()

function finance(){

    //prompt the user to enter the total amount of money they have in assets

var assets = parseFloat(prompt("Please enter total amount of money in assets"));

    //create while loop to make sure that the user inputs numbers and not strings or letters
    //set assets equal to Number

assets == Number

    //While  assets is not a number alert the user to input a number and prompt the user to enter the total money in
    //assets until the condition is met that the user entered a number for assets then break the loop and move on to the
    //next block of code

while(isNaN(assets)){
    alert("Please enter a valid number");
    parseFloat(prompt("Please enter total amount of money in assets"));

    break
}
//prompt user to enter the amount of money to add to their assets to show an increase

var add = parseFloat(prompt("Please enter total amount to add to assets"));

    //create while loop to make sure the user enters a number and not letters
    //set the add equal to Number

add == Number

    //while add is not a number alert the user to input a number and prompt the user to enter the amount of money to
    //add to the assets until the condition is met that add is equal to a number then break the loop and move on to the
    //next block of code

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