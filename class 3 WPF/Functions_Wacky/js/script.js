/**
 * Created by bryancash on 1/30/14.
 */

//Name: Bryan Cash
//Date: 1/30/2014
//Assignment: Functions_Wacky

var jedi = Number(prompt("Please enter the amount of Jedi in your Jedi Counsel"));
var sith = Number(prompt("Please enter the amount of sith you will fighting"));
var clones = Number(prompt("Please enter the amount of Republic troops"));
var droids = Number(prompt("Please enter the amount of separatist droids"));

function calc(jedi, clones, sith, droids){
    troops = (jedi + clones) - (sith + droids)
    return troops

}

var g = calc(jedi, clones, sith , droids);

if(g >= 0){
    alert("The force tells me we will win this battle with " + g + " more troops than the separatists");
}else if(g < 0){

        alert("The force tells me this is a battle we cannot win, we are outnumbered")

}




