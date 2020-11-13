

// CHALLENGE 1

// Who's name is longer?

​

/* BRONZE

Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. Console log how 
many letters are in each name.

*/

//to create a variable, use var or let
//var is legacy
//let is hwat you should use

let amruta = "Amruta";
let paul = 'Paul';

console.log(amruta.length);
console.log(paul.length);

/* SILVER

Expand on what you have already done and write a conditional to see who has the longer 
name. Using string interpolation console log who's name is longer. 

Example Result: My name is longer than Adam's.
*/

if (amruta.length > paul.length) {
    console.log(`${ amruta } is longer than ${ paul }`);
} else {
    console.log(`${ paul } is longer than ${ amruta }`);
}

/* GOLD

In the console log include how many letters difference there are between the names.

Example Result: Adam's name is shorter than mine by 4 letters.

There is also one additional case that should be handled that has not been mentioned so 
far. See if you can add that to your conditional!

*/

let amruta = "Amruta";
let paul = "Paulie";

console.log(amruta.length);
console.log(paul.length);

if (amruta.length > paul.length) {
    console.log(`${ amruta } is longer than ${ paul } by ${ amruta.length - paul.length } characters`);
} else if (amruta.length === paul.length) {
    console.log(`${ amruta } is equal in length to ${ paul }`);
} else {
    console.log(`${ paul } is longer than ${ amruta } by ${ paul.length - amruta.length } characters`);
}



// CHALLENGE 2

// Types Challenge

​

/* BRONZE

Create an Object that contains a string, number, boolean, and object.

Console.log the type of one of the values in the object.

*/

let myVariable= { name = 'Eric', age = 36, var on = true;
console.log(on); let off = false;
console.log(off); 
}

​

/* SILVER

Write a conditional that checks the type of one of the values stored in the object 

and console logs the data type. If the value is not a string, number, boolean, or object 
console log 'What are you?!'

*/




​//typeof -> tells you the type of something
//if it === string -> console.log('It is a STRING')
let myVariable = {
    firstValue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}

let valueToCheck = myVariable.firstValue;

if (typeof valueToCheck === "string") {
    console.log("It is a STRING");
} else if (typeof valueToCheck === "number") {
    console.log("It is a NUMBER");
} else if (typeof valueToCheck === "boolean") {
    console.log("It is a BOOL");
} else if (typeof valueToCheck === "object") {
    console.log("It is an OBJECT");
} else {
    console.log("Who ARE you??")
}


