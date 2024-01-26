//object literals
//objects are stored in the form of key value pairs
//symbol declaration
const mysym = Symbol("symbol1")



let myobject = {
        name: "jhanu",
        age: 20,
        email: "jhanu@google.com",
        "college name": "IIIT ",
        study: {
            scl: "btech",
            id: 876786
        },
        income: 6876876,
        isloggedIn: true,
        logginHistory: ["monday", "wednesday"],
        cash: null,
        //imp using symbol in objects
        [mysym]: "symbol1ex"


    }
    // console.log(myobject.income);
    // console.log(myobject.name);
    // console.log(myobject["college name"]); //imp
    // //if we access using . for symbol it gives undefined
    // console.log(myobject[mysym]); //imp
    // console.log(myobject.cash);
    // console.log(myobject.logginHistory[1]);
    // console.log(myobject.study);

// //updation of values of a object
// myobject.email = "ammu@google.com";
// console.log(myobject.email);

// ///freeze="it wont allow us to change the values "
// //we need to apply on the object
// Object.freeze(myobject);
// myobject.email = "myemail@google.com";
// console.log(myobject.email);
// console.log(myobject);

//create function

// myobject.greeting = function() {
//     console.log("hello welcome to JS");
// }
// console.log(myobject.greeting); //function wont execute but just returns the referece
// console.log(myobject.greeting());

// myobject.welcome = function() {
//     console.log(`welcome to chai aur code  ${this.name}`);
// }
// console.log(myobject.welcome());

//singleton
// const instagram = new Object("jhanu_41");
// console.log(instagram); //empty object

// const fb = {};
// console.log(fb); //both declarations are same
// //we can add key values
// fb.name = "rollno21"
// fb.channelno = 234
// fb.character = "krish"
// console.log(fb);


//Nested objects
const fbUser = {
    email: "myemial@google.com",
    fullname: {
        userFullname: {
            firstname: "Jhansi",
            lastname: "Rani"
        }
    }
}
console.log(fbUser);
console.log(fbUser["fullname"]["userFullname"]["firstname"]);
console.log(fbUser.fullname.userFullname.lastname);

//how to merge various objects
const case1 = {
    1: 'a',
    2: 'b'
}
const case2 = {
    3: 'c',
    4: 'd'
}
const case3 = {
        5: 'e',
        6: 'f'
    }
    //using assign method
const answer = Object.assign({}, case1, case2, case3);
//{} -->takes all the objects into it 
// console.log(answer);

// //using spread(better approach)
// const glassspread = {...case1,
//     ...case2,
//     ...case3
// };
// console.log(glassspread);

//ARRAY OBJECTS
const arrobj = [{
            s1name: "shiv",
            age: 89
        },
        {
            s2name: "ram",
            age: 56
        },
        {
            s3name: "krishna",
            age: 45
        }
    ]
    // console.log(myobject);
    // console.log(Object.keys(myobject));
    // console.log(Object.values(myobject));

// //to check whether a property exists or not
// console.log(myobject.hasOwnProperty('name'));

//OBJECT DESTRCTURING

const course = {
    coursename: "engineering",
    fee: "5lakhs",
    duration: 4,
    coursecredits: 45
}

// const { coursename } = course
const { coursename: name, coursecredits: credits } = course

console.log(name);
console.log(credits);


//JSON AND ABOUT APIS
//JSON DECLARATION

// {
//     "name": "jhanu",
//     "age": 20,
//     "id": 98786,
//     "location ": "India"
// }