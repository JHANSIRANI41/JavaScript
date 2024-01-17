//variables
console.log("Jhanu");
const accountId = 14443;
let accountNo = "b1234343"; //solves all the problems of scope
var accountEmail = "jhanu@gmail.com"; //we should not use because of scope problem.

/*
prefer not to use var 
because of issue in block scope and functional scope  
 */

let accountdef; //output undefined
accountBranch = "Bachannapet"; //memory is reserved
console.log(accountId, accountNo, accountEmail, accountBranch, accountdef);

//accountId = 345; //assignment to constants is not possible.(error)

accountNo = "shiv"; //we can update the value of let.
console.log(accountNo);

//console.log(accountId, accountNo, accountEmail, accountBranch);
accountEmail = "jhansi@gmail.com"; //var can also be updated
console.log(accountEmail);
console.log(accountId, accountNo, accountEmail, accountBranch);
console.log(typeof(accountBranch));
accountEmail += "hello";
console.log(accountEmail);

//printing using table
console.table([accountId, accountNo, accountEmail, accountBranch]);