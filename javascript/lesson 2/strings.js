// primitive wrapper methods
let firstName = "Sulaiman";
let lastName = "Awan";
let sentence = "My Name is Sulaiman";

console.log(typeof firstName);

//prints the letter of a string at a specified index
console.log(firstName.charAt(5));
//concatenates strings together
console.log(firstName.concat(" ", lastName));
//returns length of string (not a method)
console.log(firstName.length)
//checks whether a string ends with the string in the parenthesis
console.log(sentence.endsWith(firstName));
//returns the first instance of the given character if it does not exits returns -1
console.log(firstName.indexOf("Sulaiman"));
//returns the last instance of the given character if it does not exits returns -1
console.log(sentence.lastIndexOf("a"));
//to uppercase
console.log(sentence.toUpperCase());
//to lowercase
console.log(sentence.toLowerCase());
//replaces all instances of a specified character with another character
sentence = sentence.replaceAll(" ", "_");
console.log(sentence);





//github works
//console.log("github works");
//!!!!!