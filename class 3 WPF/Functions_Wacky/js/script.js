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




