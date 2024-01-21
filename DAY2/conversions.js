// let runs = "90qweqw"
// console.log(typeof runs)
// let balls = Number(runs)
// console.log(balls)


// let test = true
// console.log(typeof test)

// let score = String(test)
// console.log(score)


// let wide = Number(test)
// console.log(wide)


// let out = Boolean(test)
// console.log(out)


// let ipl = undefined
// console.log(ipl)
// let iplscore = String(ipl)
// console.log(iplscore)
// let iplscore1 = Number(ipl)
// console.log(iplscore1)
// let iplscore2 = Boolean(ipl)
// console.log(iplscore2)




// let wc = null
// console.log(wc)
// let wcscore = String(wc)
// console.log(wcscore)
// let wcscore1 = Number(wc)
// console.log(wcscore1)
// let wcscore2 = Boolean(wc)
// console.log(wcscore2)




// /*
//  alphanumric string to Number -->NaN
//  boolean to String --> true
//  boolean to Number -->true

//  " 33"==>33
//  "33wew"==>NaN(not a number)
//  true-->1

// */
// let isLoggedIn = -3434

// let booleanislooggedin = Boolean(isLoggedIn);
// console.log(booleanislooggedin)

// /*1 ==>true 
//   0 ==>false
//   " ans" ==>true
//   " " ==>false
// */
// let noofcars = 78
// let audi = String(noofcars)
// console.log(audi);
// console.log(typeof audi);




/////////////operations///////////
// let str1 = "hello"
// let str2 = " how are uh"
// console.log(str1 + str2);
// console.log("hi" + 98);
// console.log(100 + "hello")
// console.log(100 + 89 + "%" + 100 + 89);

// //if you encouter string then the followed all the items will be stringsin this context.

// console.log(+true); //1
// console.log(+" "); //0
// console.log(+false); //0
// console.log(typeof(+"12")); //12
// console.log(+"mmhu"); //NaN

// const myInt = 89.8883
// console.log(myInt.toFixed(2));
// let no = "90"
// no += 3;
// console.log(no);
// let ans = Number(no) + 3;
// console.log(ans);

/*      INCREMENT AND DECREMENT  */

// //post increment
// let postinc = 56
// console.log(postinc++);

// //pre increment
// let preinc = 78
// console.log(++preinc);

// //post decrement
// let postdec = 59
// console.log(postdec--);

// //pre decrement
// let predec = 34
// console.log(--predec);


/* ASSIGNMENT OPERATORS  */
let no1 = 90
no1 += 6
console.log(no1);
no1 -= 2
console.log(no1);
no1 *= 2
console.log(no1);
no1 /= 2
console.log(no1);
no1 %= 2
console.log(no1);

/* comparision operators */
console.log(2 > 7);
console.log(3 < 9);
console.log(3 >= 4);
console.log(4 <= -9);
//strict equality
console.log(3 === 3);
console.log(3 !== 3);