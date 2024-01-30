let a = 90
const b = 34
var c = 76 //it has global scope
console.log(a);
console.log(b);
console.log(c);

function printval() {
    console.log(a);
    console.log(b);
    console.log(c);
    c = 24

}
printval();
console.log("c", c);

//nested functions
goa()

function goa() {

    let season = "summer"
    console.log("in main function");
    //beach()

    function beach() {
        let enjoy = true
        let distance = 400
        console.log(season);
    }
    console.log("after 2nd function");
    beach()


}
//goa()

//ice cream example
//child can access parent variables,but parent cant acess child variables
//if conditionals
if (true) {
    const name = "shiv"
    let location = "India"
    if (location === "India") {
        let passportid = 987678;

        console.log(`$ {name} passport verification is done`);
    }
    //console.log(passportid);("we cannot access out of the scope")

}
//console.log(location); //we cannot access out of the scope-
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -function facts

console.log(addone(4));

function addone(num1) {
    return num1 + 1;
}
// console.log(addone(4));


//hoisting
addtwo(8) //error
const addtwo = function(num2) {
        return num2 + 2;
    }
    //addtwo(7);