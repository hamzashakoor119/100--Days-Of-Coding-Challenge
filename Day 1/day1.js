// ========================================================================== Day-1 Assignments  =========================================================================
// Q-1 = install Node Js , TypeScript and VS Code on your Laptop .
// Answer = All Installatioin Dn .
// __________________________________________________________________
// Q-2 = Personal Message: Store a person’s name in a variable and print a message to them, like 
//" Hello Hamza, How Was Your First Day 100 Days Of Coding " ?
// __________________________________________________________________________________________________
// Code is here :
var person_name1 = " Hamza ";
console.log("Hello ".concat(person_name1, " How Was Your First Day 100 Days Of Coding ? "));
// Q-3 = Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// _________________________________________________________________________________________________________________________________
// Code is here :
var person_name2 = " Hamza shakoor ";
// (i)- Show Person Name in LowerCase :
var lowerCaseName = person_name2.toLowerCase();
console.log(lowerCaseName);
// (ii)- Show Person Name in UpperCase :
var upperCaseName = person_name2.toUpperCase();
console.log(upperCaseName);
// (iii)- Show Person Name in TitleCase :
var titleCaseName = person_name2.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titleCaseName);
