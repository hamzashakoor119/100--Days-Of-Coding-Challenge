// =============================================================================== Day--2 ===============================================================================





// Q-1 = Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

// *Explain :* 
// Simply choose a quote you like and show it with who said it. It's about combining text.
// ___________________________________________________________________________________________________________________

// Code is here :

let quote1 : string = " that becoming a skilled programmer is not possible until you confront errors ."
let author :  String = " Hamza Shakoor "

console.log(` "${author} once said, “${quote1}”" `);



// Q-2 = Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

// *Explain :*
//  First, save the author's name in a variable. Next, create your quote message in another variable.
//  Then, show it. This teaches you to organize and use your data with variables.
// __________________________________________________________________________________________________________________________________

// Code is here :


let famous_person : string = "Hamza Shakoor";
let quote2 : string = " that becoming a skilled programmer is not possible until you confront errors .";

let message :  string = ` "${famous_person} once said, “${quote2}”" `;

console.log(message);



// Q-3 = Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.Use "\t" (tab) and "\n" (new line) at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

// *Explain :* 
// Save a name with extra spaces or new lines around it. Show it first with the extra space, then remove the spaces and show it clean. This helps you learn how to clean up text.
// ________________________________________________________________________________________________________________________________________________________________________________

// Code is here :

let name1 : string = "\t\n Mr Hamza \t\n";
console.log(name1) ;

console.log(name1.trim());