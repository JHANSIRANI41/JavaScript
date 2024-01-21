///stack->(Primitives )(creates a copy)
//heap->(non primitives)(passes the original value)
let id1 = "1234"
let id2 = id1
id2 = "3456"
console.log(id1);
console.log(id2);


//objects
let user1 = {
    accno: "b1234354",
    branch: "sbi"

}

//these two variables point to same address in the memory
let user2 = user1;
user1.branch = "cbi"
console.log(user1.branch);
console.log(user2.branch);