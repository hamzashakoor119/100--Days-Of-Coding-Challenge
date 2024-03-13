
// ===================================== Day-6 Assignments =====================================


/*Q-16 = More Guests: You've found a bigger dinner table, so there's room for more guests.
Explain & TIP:
When you have more space, you can add more guests to your list.
You can add guests at the beginning, middle, and end of an array.*/
//--------------------------------------------------------------------------------------------
// Code is here :

let guests:string [] = ["Hamza","Ali","Kashif"];
console.log("Great news! I Have a lot of space  on my dinner table.");

guests.unshift("Mazhar");
guests.splice(guests.length/2,0, "Imran");
guests.push("Sarfraz");

guests.forEach(guest => {
    console.log(`Hyyy ${guest}, I am happy to see you in my dinner party .`) 
});

/*Q-17 = Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
and you can only invite two guests.
Explain & TIP:
Sometimes plans change, and you'll need to adjust your guest list.
Removing guests from your list is straightforward but should be done thoughtfully.*/
//-------------------------------------------------------------------------------------------------------
// Code is here :

console.log("Unfortunately, I Can Afford Only Two People For Dinner Bcz Somes Resons .");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you for dinner.`);
}

guests.forEach(guest => {
    console.log(`Hyyy ${guest}, you're still invited for dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);
    
/*Q-18 =  Seeing the World: Think of at least five places you’d like to visit.
Explain & TIP:
Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.*/
//------------------------------------------------------------------------------------------------------------------------------------------

// Original list of places to visit
let placesToVisit = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Original List:", placesToVisit);

// Sorting the array alphabetically
let sortedList = placesToVisit.slice().sort();
console.log("Sorted List:", sortedList);

// Reversing the array
let reversedList = placesToVisit.slice().reverse();
console.log("Reversed List:", reversedList);

// Shuffling the array (Randomizing)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledList = shuffleArray(placesToVisit.slice());
console.log("Shuffled List:", shuffledList);

// Original list remains unchanged
console.log("Original List after Operations:", placesToVisit);



// ======================================================================================= 😎🥰 Yeeee i am done ! 🥰😎
