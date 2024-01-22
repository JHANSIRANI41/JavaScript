//String concatenation
// const name = "Jhanu "
// const id = 3435
// console.log(name + id);
// //but this is outdated

// //So,we have to use "string interpoation"==>everythig is enclosed under(` `)
// console.log(`my name is ${ name } and my id no is ${ id }`);

// //Another method of string declaration
// const str = new String("hello");
// console.log(str);
// console.log(str[0]);
// console.log(str.__proto__); //object
// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.slice());

// console.log("hello".charAt(0));
// console.log("hello" [1]);

//checking for substring using ==>{INCLUDES()}
// let user1 = "rollno 21 krish"
// console.log(user1.includes("21 krish"));

// //substring starts with method ==>startsWith()
// console.log(user1.startsWith("roll"));
// console.log(user1.endsWith("ish"));
// console.log(user1.startsWith("krish"));

//for finding the position of substring we use indexOf(),if it is found it returns thefirst occurence of that substringelse it returns-1
// let findsubstring = "what is your name? my name is Ram."
//     //first occurence 
// let firstOccurence = findsubstring.indexOf("name");
// console.log(firstOccurence);
// //second occurence finding
// let secondOccurence = findsubstring.indexOf("name", firstOccurence + 1);
// console.log(secondOccurence);
// // console.log(findsubstring.indexOf("? "));
// // console.log(findsubstring.indexOf("bablu"));

// //EXTRACTING SUBSTRING FROM A STRING (SLICE)
// let movie = "salaar"
// console.log(movie.slice(2, 4));
// console.log(movie.slice(-5, -1));
// console.log(movie.slice(-7, -1));

//Changing cases
let animal = "dog"
console.log(animal.toLowerCase());
console.log(animal.toUpperCase());

//updating parts of a string
let morning = "sunrise"
let evening = morning.replace("rise", "set");
console.log(evening);

//to change all occurances of a string
let sentence = "rama siya rama,rama jai jai rama"
sentence = sentence.replaceAll("rama", "ram");
console.log(sentence);