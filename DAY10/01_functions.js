//Functions
//these area used to complete a task

// function myname() {
//     console.log("jhansi");
// }
// //function reference
// //myname 
// //()==>execution
// myname();

// function addtwonumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// //addtwonumbers();output:not a number becauseyou haven't passed any value yet
// addtwonumbers(3, 4)
// addtwonumbers(2, "3") //it wont care about the datatype
// addtwonumbers("2", 9)

// function addtwovalues(number1, number2) {
//     // let result = number1 + number2;
//     // console.log(result);
//     return number1 + number2;
// }
// let add = addtwovalues(4, 34, 0)
// console.log(add); //undefined
// //console.log(result); //out of scope

// function logindetails(username = "sanju samson") //default values giving
// {
//     //strictly ====
//     // if (username === undefined) //we can also write this as //it wont allow false values
//     if (!username) {
//         console.log("plz enter the username");
//         return
//     }
//     return (`user ${username} just logged in.`);
// }
// //it wont print anything becauuse because havent assigned any variable to store the returned vlaue 
// //logindetails("jhanu");
// console.log(logindetails("jhanu"));
// console.log(logindetails(""));
// console.log(logindetails()); //user undefined just logged in.
// let login = logindetails("ammu");
// console.log(login);
// //to check out all the edge cases we need to use if else
// // function example(parameters) {

// // }
// // example(arguments);



//spreador rest operators
//in functions it called as rest operator
function shoppingcartprices(val1, val2, ...nums) {
    return nums



}
console.log(shoppingcartprices(100, 200, 300, 4000, 45646));

//passing objects to a function

//way 1:
const shopping = {
    mall: "trends",
    location: "Jangoan",
    itemstopurchase: "dress"
}

function postshopping(shoppingitems) {
    console.log(`i have bought ${shoppingitems.itemstopurchase} at ${shoppingitems.mall} located in ${shoppingitems.location}`);
}
postshopping(shopping);

//direct passing the object

function games(gamezone) {
    console.log(`game zone is located at${gamezone.location},which contains ${gamezone.watergames}  ${gamezone.indoorgames}`);
}
games({
        location: "hyderabed",
        watergames: "raindance",
        indoorgames: "carrom,cards"
    })
    //passing an array as a parameter

let scores = [100, 200, 300, 400]

function matchscores(matchhighlights) {
    console.log(`rohit scored ${scores[2]}`);
}
matchscores(scores);

//directly passing an array
function printsecondele(arrayele) {
    console.log(arrayele[2]);
}
printsecondele([1, 2, 3, 4])