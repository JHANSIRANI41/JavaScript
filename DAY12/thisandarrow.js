//this keyword refers to current context

let ytcourse = {

        channel: "chaiaurcode",
        price: 0.00,
        welcomemsg: function() {
            //console.log(`welcome to ${channel} yt channel,the price is ${price}`);//error it cant find them
            console.log(this);
            console.log(`welcome to ${this.channel} yt channel,the price is ${this.price}`);


        }


    }
    //print the elements of object

// console.log(ytcourse.channel, ytcourse.price);
// ytcourse.welcomemsg()
// console.log(this); //in global context output {}
// ytcourse.price = 90.9
// ytcourse.welcomemsg()

///we cant use this in functions

// function tv() {
//     let user = "shiv"
//         // console.log("welcome to aiwa led tv");
//         // console.log(this); //it gives you so many things
//     console.log(this.user); //undefined

// }
// tv()

// let tv = function() {
//     let user = "shiv"
//     console.log(this); //big list of data

// }
// tv()

//ARROW FUNCTIONS
// let tv = () => {
//     let user = "shiv"
//     console.log(this); //{}

// }
// tv()


//in browser this(current context) refers to window
//but in stand alone engines global this refers to { }

///++++++++++++++++++++++++++++++++++++++ARROW FUNCTION+++++++++++++++++++++++++++++++++++
//Basic syntax
//() => {}
//we can hold it in a variable also
// const arrow = (num1, num2) => {
//     return num1 + num2
// }
// console.log(arrow(3, 4));

//implecit return
const arrow = (num1, num2) => num1 + num2
console.log(arrow(5, 4));

const name = (name1, nam2) => (name1 + name2)
console.log(arrow("shiva", "ram"));
//return a object
const objectprint = (name1, nam2) => ({ user: "krish" })
console.log(objectprint());
//if {}you need to use return,if () no need of return