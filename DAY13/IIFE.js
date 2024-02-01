//immediately invoked function expresion(IIFE)
//main use
//1.to immediately execute the code
//2.to avoid polluting the gloabl scope
//Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

function college() {
    console.log(`most beatiful days of our life`);
}
college();
//using IIFE
// ({})();
//semicolon is very important 
//( ) immediately execution start after running but,it wont know when to stop ,so it is mandatory to add a semicolon to stop 


(function life() {
    console.log(`work hard to reach your goals`);
})();
//Named IIFE
(function happydays(num1, num2) {
    //console.log(`work hard to reach your goals ,${num1+num2}.`);


})(2, 4);

let output = (function happydays1(num1, num2) {
    //console.log(`work hard to reach your goals ,${num1+num2}.`);
    return num1 + num2

})(2, 4);
console.log(output);

//using arrow function
//()=>{}
//simple IIFE
let answer = (() => {
    console.log(`dreams comes true,when you work towards them`);
    return "hello";
})();
console.log(answer);

//important question write two IIFE 
//most of the people goes error 
//because of not using semicolon after the function exceution