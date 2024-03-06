
// ========================================================================== Day-1 Assignments  =========================================================================

                    
// Q-1 = install Node Js , TypeScript and VS Code on your Laptop .
// Answer = All Installatioin Dn .
// __________________________________________________________________


// Q-2 = Personal Message: Store a person’s name in a variable and print a message to them, like 
//" Hello Hamza, How Was Your First Day 100 Days Of Coding " ?
// __________________________________________________________________________________________________
// Code is here :

let person_name1:string = " Hamza ";
console.log(`Hello ${person_name1} How Was Your First Day 100 Days Of Coding ? `);


// Q-3 = Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// _________________________________________________________________________________________________________________________________
// Code is here :

let person_name2: string = " Hamza shakoor ";

// (i)- Show Person Name in LowerCase :

let lowerCaseName: string = person_name2.toLowerCase();
console.log(lowerCaseName);

// (ii)- Show Person Name in UpperCase :

let upperCaseName: string = person_name2.toUpperCase(); 
console.log(upperCaseName);

// (iii)- Show Person Name in TitleCase :

let titleCaseName: string = person_name2.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCaseName);

