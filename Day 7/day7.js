/*Q-19 = Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print
a message indicating the number of people you are inviting to dinner.
Explain & TIP:
Arrays have a length property that tells you how many items are in the list. Use this to
inform your guests how big the party will be.*/
// ---------------------------------------------------------------------------------------------------------
// Code is here :
var guests = ["Hamza", "Ali", "Mazhar", "Kashif", "Rehman"];
console.log("\"I have invited '".concat(guests.length, "' peoples for dinner .\""));
/*Q-20 = Think of something you could store in an array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Explain & TIP:
Arrays are perfect for keeping a collection of similar items. Choose a theme you like and list several examples.*/
// --------------------------------------------------------------------------------------------------------------------------------
// Code is here :
var visiting_places = ["Sakardu", "Muree", "Paris", "Tokyo", "Istanbul"];
console.log("I wana visit to :", visiting_places);
/*Q-21 = Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Explain & TIP:
Objects in TypeScript can store various related data about a single entity. Think of an object as a container for
characteristics of something, like a book or a car.*/
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Code is here :
var Laptop = {
    title: "Laptop, LenovoThink Pad",
    Brand: "Lenovo",
    Processor: "Core-i7",
    Generation: "13-Generation",
    Ram: "16GB Ram",
    Storage: "1TB Storage",
};
console.log("I wana buy a ".concat(Laptop.title, " Brand of ").concat(Laptop.Brand, " with the specifications of \n").concat(Laptop.Processor, ",").concat(Laptop.Generation, ",").concat(Laptop.Ram, ",").concat(Laptop.Storage, " ."));
