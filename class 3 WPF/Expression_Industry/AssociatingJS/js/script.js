//Name: Bryan Cash
//Date:1/16/2014
//Assignment: Expressions


//Expression_Industry

var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var storeNumber = prompt("Please enter store number");
var date = prompt("Please enter the date");

alert("Wlecome " + firstName +" " + lastName);

var cdBins = [50, 50, 12, 11, 20, 35];
var cassetteBin = [20, 15, 31];
var dvdBin = [14, 35, 24, 11, 18, 15];
var bluRayBin = [5, 17, 8, 9, 21, 14];

var cdBinTotal = cdBins[0] + cdBins[1] + cdBins[2]+ cdBins[3] + cdBins[4]+ cdBins[5];

var cassetteBinTotal = cassetteBin[0] + cassetteBin[1]+ cassetteBin[2];

var musicTotal = cdBinTotal + cassetteBinTotal;

var dvdBinTotal = dvdBin[0] + dvdBin[1] + dvdBin[2] + dvdBin[3] + dvdBin[4] + dvdBin[5];

var bluRayBinTotal = bluRayBin[0] + bluRayBin[1] + bluRayBin[2] + bluRayBin[3] + bluRayBin[4] + bluRayBin[5];

var movieTotal = dvdBinTotal + bluRayBinTotal;

var totalInventory = movieTotal + musicTotal;

alert("Store " + storeNumber + " has " + cdBinTotal + " CD's, " + cassetteBinTotal + " cassettes " + dvdBinTotal + " DVD's "
    + bluRayBinTotal + " BluRays. Total music is stock is " + musicTotal + ". Total movies in stock is " + movieTotal
    +". Total items in stock is " + totalInventory + ". Accessed by " + firstName + " " + lastName + " on " + date + ".")

console.log(" Store " + storeNumber + " has " + cdBinTotal + " CD's, " + cassetteBinTotal + " cassettes " + dvdBinTotal + " DVD's "
    + bluRayBinTotal + " BluRays. Total music is stock is " + musicTotal + ". Total movies in stock is " + movieTotal +
    ". Total items in stock is " + totalInventory + ". Accessed by " + firstName + " " + lastName + " on " + date + ".");