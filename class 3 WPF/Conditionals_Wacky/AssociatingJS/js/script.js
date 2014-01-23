//Name: Bryan Cash
//Date: 1/22/2014
//Assignment: Conditionals_Wacky

//Are you an apprentice or a master? Choose your side and take over or protect the galaxy.

//Here is another Wacky Star Wars program hope you enjoy!

//This program takes your age and determines if you are an apprentice or a master and lets you choose a side dark or
//light and them welcomes you to your destiny

//Alert user about the program

alert("Are you an apprentice or a master?");
alert("Choose your destiny!");

//prompt user to enter age to determine whether or not they are an apprentice or a master

var age = prompt("Please Enter your age");
var side = prompt("Please Enter Light for Light-side or Dark for Dark-side");

//If the user's age is less than or equal to 20 and they choose the light side

if(age <= 20 && side == "light"){

    //The user is a jedi padawan

    alert("You are a Jedi Padawan");

    console.log("you are a jedi padawan");

//If the user's age is less than or equal to 20 and they choose the dark side

}else if(age <=20 && side == "dark"){

    //The user is a sith apprentice

    alert("you are a sith apprentice");

    console.log("you are a sith apprentice");

//If the user is older than 20 and they choose the light side

}else if(age > 20 && side == "light"){

    //They are a Jedi Master

    alert("you are a jedi knight");

    console.log("you are a jedi knight");

}