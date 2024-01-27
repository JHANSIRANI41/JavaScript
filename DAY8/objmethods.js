//assign
const initial = { 1: 'a', 2: 'b' }
const final = {
    3: 'c',
    4: 'd'
}
const answer = Object.assign({}, initial,
    final);
console.log(answer);
console.log(initial);
console.log(final);

//create
let student = {
    class: 34,
    information: function() {
        console.log(`student name is ${this.name} and id is ${this.id}`);
    }
}
let studentinfo = Object.create(student);
studentinfo.name = "jhanu";
studentinfo.id = "87676";
studentinfo.information();

//defineproperties
const moreobj = {}

Object.defineProperties(moreobj, {
    property1: {
        value: "shiv",
        writable: true
    },
    property2: {

    }
});

console.log(moreobj.property1);
//is
console.log(Object.is(1, '1'));
console.log(Object.is(undefined, undefined));