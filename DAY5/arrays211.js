let rollno21 = ["krish", "bablu", "tanishk"]
let doremon = ["doremon", "suzuka", "nobita"]
    // console.log(typeof(rollno21 + doremon));
    // rollno21.push(doremon);
console.log(rollno21);
let myarr = rollno21.concat(doremon);
console.log(myarr);
//spread and concat works the same
//spread(prefered because we can add any no of elements)
let cartoon = [...rollno21, ...doremon]
console.log(cartoon);
//flat
let complexarr = [1, 2, 3, [4, 5, 6], 7, 8, [8, 9, 6, 7],
    [2, 3, 4, [3, 4]]
];
let simplearrconvert = complexarr.flat(Infinity);
console.log(simplearrconvert);

//check whether it is array
console.log(Array.isArray(complexarr));
console.log(Array.isArray("hello"));
//to convert to  an array
console.log(Array.from("hello"));
//interesting for interviews
console.log(Array.from({ name: "jhansi" })); //empty it can notconvert it

//OF(array from various variables)
let score1 = 9
let score2 = 50
let score3 = 89
let scorearr = Array.of(score1, score2, score3)
console.log(scorearr);