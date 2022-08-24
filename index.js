// Follow along with the examples here
function doNothing() {};
function sayHello () {
    console.log("Hello!");
}
sayHello ();

function sayHelloToGuadalupe () {
    console.log("Hello, Guadalupe!")
}

sayHelloToGuadalupe ();

function sayHelloToLiz () {
    console.log("Hello, Liz!")
};

sayHelloToLiz ();

function sayHelloToSamip () {
    console.log("Hello, Samip!");
}

sayHelloToSamip ();

function doSomething(thing) {
    console.log(thing);
}

doSomething("anything"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); //"Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

// ^ Note that in the above, JavaScript coerces teh number 1 into the string "1"

function say(greeting, firstName) {
     return `${greeting}, ${firstName}`;
}

say("Goodbye", "Julio");
say("Julio", "Hello");

function add(x, y) {
    return x + y;
}

console.log(add(80, 9000));
console.log(say("Hello", "Liz"));

function say1(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`; 
}

console.log(say1("Howdy", "partner"));


function diff(num1, num2) {
    return num1 - num2;
}

console.log(diff(5, 7));