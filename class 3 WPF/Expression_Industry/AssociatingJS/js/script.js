//Name: Bryan Cash
//Date:1/16/2014
//Assignment: Expressions


//Expression_Industry: This program will be used to calculate the amount of music and movies a music shop has. Using
//arrays to store the amount of items in bins and adding them together to get a total, then add those totals to categorize
//by music and movies, finally calculate all items in stock.

//Create a greeting a store firstName, lastName, storeNumber, and date

var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var storeNumber = prompt("Please enter store number");
var date = prompt("Please enter the date");

//Create greeting to welcome the user

alert("Wlecome " + firstName +" " + lastName);

//Create variables for arrays, there are 6 cd bins, 4 cassette bins, 6 dvd bins and 6 BluRay bins. Sort them into arrays
//and count how many items are in each bin and entered them into an array by type (dvd, cd, BluRay, and cassette).

var cdBins = [50, 50, 12, 11, 20, 35];
var cassetteBin = [20, 15, 31];
var dvdBin = [14, 35, 24, 11, 18, 15];
var bluRayBin = [5, 17, 8, 9, 21, 14];

//Add the total of all cd bins in array cdBins and create variable cdBinTotal to store the result, then add the total of
//of all cassettes bins in array cassetteBin and store in variable cassetteBinTotal, finally add results of cdBinTotal
//as cassetteBinTotal to create variable musicTotal. This shows how many cassettes are in stock, how many CDs are in stock
//and how much music total is in stock.

var cdBinTotal = cdBins[0] + cdBins[1] + cdBins[2]+ cdBins[3] + cdBins[4]+ cdBins[5];

var cassetteBinTotal = cassetteBin[0] + cassetteBin[1]+ cassetteBin[2];

var musicTotal = cdBinTotal + cassetteBinTotal;

//Add the total of all dvdBins in array to create a new result variable (dvdBinTotal), add the total of all bluRayBins
//in array to create a result variable bluRayBinTotal. Add bluRayBinTotal and dvdBinTotal to create movieTotal variable
//This shows how many DVDs total are in stock, how many total BluRays are in stock and how many movies total are in stock

var dvdBinTotal = dvdBin[0] + dvdBin[1] + dvdBin[2] + dvdBin[3] + dvdBin[4] + dvdBin[5];

var bluRayBinTotal = bluRayBin[0] + bluRayBin[1] + bluRayBin[2] + bluRayBin[3] + bluRayBin[4] + bluRayBin[5];

var movieTotal = dvdBinTotal + bluRayBinTotal;

//Add the total of variable movieTotal and musicTotal to find out the total amount of items in stock create variable
//totalInventory. This shows how many total items are in stock.

var totalInventory = movieTotal + musicTotal;

//

alert("Store " + storeNumber + " has " + cdBinTotal + " CD's, " + cassetteBinTotal + " cassettes " + dvdBinTotal + " DVD's "
    + bluRayBinTotal + " BluRays. Total music is stock is " + musicTotal + ". Total movies in stock is " + movieTotal
    +". Total items in stock is " + totalInventory + ". Accessed by " + firstName + " " + lastName + " on " + date + ".")

console.log(" Store " + storeNumber + " has " + cdBinTotal + " CD's, " + cassetteBinTotal + " cassettes " + dvdBinTotal + " DVD's "
    + bluRayBinTotal + " BluRays. Total music is stock is " + musicTotal + ". Total movies in stock is " + movieTotal +
    ". Total items in stock is " + totalInventory + ". Accessed by " + firstName + " " + lastName + " on " + date + ".");