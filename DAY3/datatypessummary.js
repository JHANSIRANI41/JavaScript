//Based on how the data is stored in the memory,the data is categorized into two types

//#PRIMITIVES  (CALL BY VALUE)
//#NON PRIMITIVES( REFERENCE)


//#PRIMITIVES (7 types)
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

//Symbol(used to uniquely identify)
// const id = Symbol("@# $123")
// const password = Symbol("@# $123")
// console.log(id == password);
//const val = 75876876586758967n;(bigint)

//#NON PRIMITIVES
// 1. arrays
// 2. Objects
// 3. Functions

//JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
//arrays
// const arr = ["rollno1", "krish", "bablu"];
// console.log(arr[0]);

// objects
// let cartoon = {
//     //key value pairs
//     name: "krish",
//     rollno: 21,
//     channel: "cartoon network"
// }
// console.log(cartoon);


//functions
let myfunction = function() {
    console.log("krish");
}
console.log(myfunction);


//return types of various datatypes
// 1. String == > String
// 2. Number == > Number
// 3. null == > Object
// 4. undefined == > undefined
// 5. Boolean == > Boolean
// 6. Symbol == > Symbol
// 7. BigInt == > BigInt

// 1. If val is undefined,
// return "undefined".
// 2. If val is null,
// return "object".
// 3. If val is a String,
// return "string".
// 4. If val is a Symbol,
// return "symbol".
// 5. If val is a Boolean,
// return "boolean".
// 6. If val is a Number,
// return "number".
// 7. If val is a BigInt,
// return "bigint".