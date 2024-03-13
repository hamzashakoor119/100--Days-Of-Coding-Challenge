
// ===================================== Day-5 Assignments =====================================


/*Q-13 = Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”
Explain & TIP:
Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.*/
//------------------------------------------------------------------------------------------------------------------------
// Code is here :

let transports:string [] = ["Kawasaki Bike", "BMW M2 Car", "Ferrari Car", "Rivo Dala"]; 

transports.forEach(transport => {
    console.log(`"I would like to buy a = ${transport}."`);
    
});

/*Q-14 = Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least four people you’d like to invite to dinner. Then use your
list to print a message to each person, inviting them to dinner.
Explain & TIP:
Just like with transportation, you can use an array to manage a list of guests.
Loop through the list to send each one a personal invitation.*/
//-------------------------------------------------------------------------------------------------------------------------------
// Code is here :

let myguests:string [] = ["Hamza", "Ali", "Rashid", "Kashif"];
myguests.forEach(guest => {
    console.log(`"Deae ${guest} plzz join me for dinner ."`)
    
});


/*Q-15 = Changing Guest List: One of your guests can't make it to the dinner, so you need to send out
a new set of invitations with a replacement guest.
Explain & TIP:
Arrays are flexible. You can replace an item if someone can't make it,
then loop through the list again for new invitations.*/
//---------------------------------------------------------------------------------------------------------------------------------------
// Code is here :

let guests: string[] = ["Hamza", "Ali", "Rashid", "Kashif"];
let unableToAttend = "Ali";
console.log(`${unableToAttend} can't make it to dinner.`);

let newGuest = "Rehman";
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// =============================================================================== 😎😎😎 Yeeeeeeh I Am Done !😎😎😎