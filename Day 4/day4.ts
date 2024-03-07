
// ================================================ Day-4 Assignments ================================================

// Q-10 = Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current dateat the
// top of each program file. Then, write one sentence describing what the program does.
// ______________________________________________________________________________________________________________

// Hamza,  07-03-2024
// I Write This Code For Print A Message :

let  myName:string = "Hamza";
console.log(` Hi ${myName}, Are You Practicing TypeScript Daily ? `)

// Q-11 = Names: Store the names of a few of your friends in an array called f_names .
// Print each person’s name by accessing each element in the list, one at a time ?
// _____________________________________________________________________________________
// Code is here :

let names:string [] = ["Sarfraz","Noman","Mazhar","Rehman"];
for ( let a=0; a < names.length; a++){
    console.log(names[a]);
}

// Q-12 = Greetings: Use the array from Exercise 11. Instead of just printing
// each person’s name,print a message to them. The message should be
// the same for each person,but personalized with their name.
// _______________________________________________________________________________
// Code is here :
// I am Using Exercise 11 Array " let names:string [] = ["Sarfraz","Noman","Mazhar","Rehman"]; "

for ( let a=0; a < names.length; a++){
    console.log(names[a] + ", You Are My Best Friend !");
}
