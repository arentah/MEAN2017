/**
 * Created by Aren on 9/21/2017.
 */

// window.onload = function(){
//     console.log(hello);
//     var hello = "something";
//     console.log(hello);
//     alert("fuck");
// }

for(var i = 0; i < 2; i++) {
    console.log(i);
}

console.log("After exiting the for loop: " + i);

const person = {
    name: 'Nick'
};
person.name = 'John' // this will work ! person variable is not completely reassigned, but mutated
console.log(person.name) // "John"

const people = [];
people.push("jimmy");
console.log(people[0]);

function double(x) { return x * 2; } // Traditional way
console.log(double(2)); // 4

const second_double = (x, y) => {return x * y}; // Same function written as an arrow function with implicit return
console.log("testing 2 arguments "+second_double(3, 2)); // 6

const third_double = x =>  {return x * 2;} // Same function written as an arrow function with implicit return
console.log("checking ... " + third_double(4)); // 6

window.onload = function(){
    //myFunc(); commented out because setTimeout is annoying
    myFunc_witharrows();
}

function myFunc() {
    this.myVar = 0;
    var that = this; // that = this trick
    setTimeout(
        function() { // A new *this* is created in this function scope
            console.log("this that example");
            console.log(that.myVar); // 0
            that.myVar++;
            console.log(that.myVar) // 1

            //console.log(this.myVar) // undefined -- see function declaration above
        },
        0
    );
}

function myFunc_witharrows() {
    this.myVar_arrow = 10;
    const anotherWay = (
        () => {
            console.log("this that example");
            console.log(this.myVar_arrow); // 0
            this.myVar_arrow++;
            console.log(this.myVar_arrow) // 1
        }

    );
    // setTimeout(
    //     () => { // this taken from surrounding, meaning myFunc here
    //         console.log("this that example");
    //         console.log(this.myVar_arrow); // 0
    //         this.myVar_arrow++;
    //         console.log(this.myVar_arrow) // 1
    //     },
    //     0
    // );
}

const destructuring_example = {
    firstName: "Aren",
    lastName: "Tahmasian",
    age: 35,
    sex: "M"
};

const { age, firstName, city = "Paris" } = destructuring_example; // calling attributes from destructuring_example object

console.log("the age: " + age) // 35 -- A new variable age is created and is equal to person.age
//console.log(first) // "Nick" -- A new variable first is created and is equal to person.firstName
console.log(firstName) // attempts to print the default first which is Aren and if unable will print sako
console.log(city) // prints Paris because the default does not exist


const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const parNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers.reduce((prev, next) => prev + next, 0); // 21

console.log(doubledNumbers);
console.log(parNumbers);
console.log(sum);

console.log("|-|-|-|-|-|-|-|-|-|");

function paramFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params)
}

paramFunc("a", "b", "c", "d", "e", "f");

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

const xx = 10;
const myObj = { xx }; // shorthand because variable name (xx) is equal to property name (xx)
console.log(myObj.xx);

const xxx = 100;
const myObj_2 = { a: xxx }; // longhand because variable name (xxx) is not equal to property name (a)
console.log(myObj_2.a);


var A = 10;
var B = "10"
var C = (true == 1)
console.log(C)