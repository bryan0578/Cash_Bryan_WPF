/**
 * Created by bryancash on 1/30/14.
 */

//Name: Bryan Cash
//Date: 1/30/2014
//Assignment: Functions_Wacky

    //This program will calculate the chances that the republic will win against the separatists

    //prompt user to input the number of jedi that will be fighting

var jedi = Number(prompt("Please enter the amount of Jedi in your Jedi Counsel"));

//prompt user to input the number of sith they will fight against

var sith = Number(prompt("Please enter the amount of sith you will fighting"));

//prompt user to input the amount of clones that will be fighting

var clones = Number(prompt("Please enter the amount of Republic troops"));

//prompt user to input the number of droids they will be fighting against

var droids = Number(prompt("Please enter the amount of separatist droids"));

//Create a function that will calculate the range of troops.

function calc(jedi, clones, sith, droids){

    //Add amount of jedi and the amount of clones, add the amount of sith and the amount of droids and subtract jedi +
    //clones from sith + droids

    troops = (jedi + clones) - (sith + droids)

    //return the calculation

    return troops

}

//set variable equal to the function(invoke function with parameters set as jedi, clones, sith and droids

var g = calc(jedi, clones, sith , droids);

//if variable set to function is greater than or equal to 0

if(g >= 0){

    //alert the user that they will win

    alert("The force tells me we will win this battle with " + g + " more troops than the separatists");

    //print the alert to the console

    console.log("The force tells me we will win this battle with " + g + " more troops than the separatists");

    //else if variable is less than 0

}else if(g < 0){

    //alert the user that they will lose the battle

        alert("The force tells me this is a battle we cannot win, we are outnumbered");

    //print the result to the console they will lose

    console.log("The force tells me this is a battle we cannot win, we are outnumbered");
}




