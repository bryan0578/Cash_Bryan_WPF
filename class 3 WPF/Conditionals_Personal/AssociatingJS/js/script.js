//Name: Bryan Cash
//Date: 1/21/2014
//Assignment: Conditionals_Personal

//Should I go to the store?

//This program will tell me if I need to go to the store to buy eggs milk or bread, and tell me which of these items I
//I will need to buy at the store

//Prompt user to enter the amount of milk left in their container of milk by percent amount, prompt user to enter the
//amount of eggs left in their container, and prompt user to answer yes or no to the question "Is there any bread?"

var milk = prompt("Enter the amount of milk left in your container by percentage. For example if your container is full" +
    "enter 100 if your container is half full enter 50, if your container is a quarter full enter 25.");
var eggs = prompt("Enter the amount of eggs left in your container.");
var answer = prompt("Is there any bread? Enter yes or no.");

//if the user has bread, greater than or equal to half of a container of milk, and greater than or equal to 6 eggs

if(answer == "yes" && milk >= 50 && eggs >= 6){

    //The user does not need to go to the store

    alert("I do not need to go to the store");

    console.log("I do not need to go to the store");

    // if the user has bread and less than half of a container of milk and more than or equal to 6 eggs

}else if(answer == "yes" && milk < 50 && eggs >= 6){

    //The user needs to buy milk

    alert("I need to go to the store for milk");

    console.log("I need to go to the store for milk");

// If the user has bread and more than half of a container of milk and less than 6 eggs

}else if(answer == "yes" && milk >= 50 && eggs < 6){

    //The user needs to go to the store to buy eggs

    alert("I need to go to the store for eggs");

    console.log("I need to go to the store for eggs");

    //If the user has bread and less than half of a container of milk and less than 6 eggs

}else if(answer == "yes" && milk < 50 && eggs <6){

    //The user needs to go to the store to buy milk and eggs

    alert("I need to go to the store for milk and eggs");

    console.log("I need to go to the store for milk and eggs");

//If the user has no bread and more than or equal to a half of a container of milk and more than or equal to 6
//eggs

}else if(answer == "no" && milk >= 50 && eggs >= 6){

    //The user needs to go to the store to buy bread

    alert("I need to go to the store for bread");

    console.log("I need to go to the store for bread");

    //If the user has no bread and less than a half of a container of milk and more than or equal to 6 eggs

}else if(answer == "no" && milk < 50 && eggs >= 6){

    //The user needs to go to the store to buy bread and milk

    alert("I need to go to the store for bread and milk");

    console.log("I need to go to the store for bread and milk");

    //If the user has no bread and more than or equal to half of a container of milk and less than 6 eggs

}else if(answer == "no" && milk >= 50 && eggs < 6){

    //The user will need to go to the store to buy bread and eggs

    alert("I need to go to the store for bread and eggs");

    console.log("I need to go to the store for bread and eggs");
    //If the user has not met any of these conditions(has no bread and less than a half of a container of milk and
    //less than 6 eggs

}else{

    //The user will need to go to the store to buy bread milk and eggs

    alert("I need to stock up on bread, milk and eggs");


    console.log("I need to stock up on bread, milk and eggs");
}