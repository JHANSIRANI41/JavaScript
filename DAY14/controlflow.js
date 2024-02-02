//IF CONDITIONALS

// const loggedIn = true

// if (console.log("hello")) {
//     console.log("welcome to our website");
// } else {
//     console.log("welcome to our blog");
// }


// if (true) { //the scope of variables in block is,only upto this block
//     let documentation = "javascript"
//     console.log(`go to google and search mdn for ${documentation}`);
// }
// // console.log(documentation);//scope is out


//we should not do like this
//shorthand for if 
//we can single statement and with a semicolon
//if uh want to write more statements then separate them with comma, but this is bad practise
const travelExpenses = 234455
if (travelExpenses > 9000) console.log(`ohh my god`), console.log(`I cant afford it`), console.log(`I am not gonna come`);;
//nested if else
const balance = 900
if (balance < 500) {
    console.log("withdraw 200");
} else if (balance > 500) {
    console.log("withdraw 300");
} else {
    console.log("withdraw 100");
}

//&&(every condition should be true)
let loggedIn = true
let debitCard = true
let hdfcAccount = false
let student = true

if (loggedIn && debitCard) {
    console.log(`welcome to our website,now uh can purchase the courses`);
} else if (loggedIn && hdfcAccount && student) {
    console.log("uh can avail 30 percent discount on each purchase");
}

if ((loggedIn && student) || debitCard || hdfcAccount) {
    console.log("welcome to web development courses");
} else {
    console.log("nope");
}