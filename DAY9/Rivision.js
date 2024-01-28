// let value = 24 + "shiv"
// console.log(value);
// let value1 = 24 + "shiv" + 87
// console.log(value1);
// console.log(typeof value1);

// let no = "34" - 9
// console.log(no);
// console.log(typeof no);

// //#stack
// let stackex = 34
// let stackex1 = 34
// console.log(stackex1);
// console.log(stackex);
// console.log(stackex === stackex1);
// //#heap
// let heapex = [23, 56]
// let heapex1 = heapex
// console.log(heapex1);
// console.log(heapex);
// console.log(heapex === heapex1); //both are pointing same location

// //string concatenation
// let str = "rollno21"
// let channel = 324
// console.log(str + "cartoon");
// //new version//string interpolation
// console.log(`go to ${channel} to watch ${str} to enjoy your day`);

let rollno21 = new String("Cartoon Network")
console.log(rollno21);
console.log(rollno21.__proto__);
console.log(rollno21.toLocaleUpperCase());
console.log(rollno21.toLowerCase());
let one = /[a-z]/g;
let ans = rollno21.match(one);
console.log(ans);

//at()
let index = 8;
console.log(`the character at index ${index} is ${rollno21.at(index)}`);
console.log(rollno21.charAt(8));
console.log(rollno21.lastIndexOf('o'));
console.log(rollno21.replace("Network", "krish"));
let meme = "hi hello hi hello"
console.log(meme.replaceAll("hi", "welcome"));
console.log(meme.search("hello"));