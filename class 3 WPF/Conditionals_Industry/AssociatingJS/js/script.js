//Name: Bryan Cash
//Date: 1/22/2014
//Assignment: Conditionals_Industry

//This program will determine what settings to use to display a web page.

//Prompt user to enter screen dimensions for their desktop or to enter "mobile" if they are using a mobile device.
//Prompt user to enter the screen dimensions for their mobile device or enter "desktop" if they are using a desktop
//computer.


var desktop = prompt("If you are using a desktop please enter 1080x1240. If you are using a mobile device, enter mobile");
var mobile = prompt("If you are using a mobile phone please enter one of the followig: for an Lg or Samsung, enter 400x240," +
    " for an Apple iPhone, enter 480x320, for a Nokia, enter 640x360, or for a Sony enter 800x400 if you are using a" +
    " desktop enter desktop.");

if(desktop == "1080x1240" && mobile == "desktop"){
    console.log("Your web page will be configured for a desktop computer.");

}else if(desktop == "mobile" && mobile == "400x240"){
    console.log("Your web page will be configured for an LG or Samsung mobile phone.");

}else if(desktop == "mobile" && mobile == "480x320"){
    console.log("Your web page will be configured for an Apple iPhone.");

}else if(desktop == "mobile" && mobile == "640x360"){
    console.log("Your web page will be configured for a Nokia mobile phone.");

}else if(desktop == "mobile" && mobile == "800x400"){
    console.log("Your desktop will be configured for a Sony mobile phone")
}else{
    console.log("Your device is not compatible with our web page.")
}
