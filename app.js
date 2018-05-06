// list of variables 

var name = 'ubonrath B. Phimvong'; 
var myAge = 40;
const numberOfStates = 50; 
var sum = 5 + 4;
var myName = '' 
var letter = myName.charAt(0);


// Code to tell ppl with first letter 'L" to step back of line 
if (letter == string.fromCharCode(76)) {
    console.log('Back of the Line!');
} else {
    console.log('Next!');
}
// alert 
function sayhello(){
    alert("Hello world!");
}

//Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ', you aren`t old enough to view this page!');
    }
}
checkAge('charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//for loop of my fav veggies
var favVeggies = ["peppers", "cucumbers", "green beans"];

for (i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}


// function to creaete sum variable
function add(num1, num2) {
    return num1 + num2;
}

// run array through loop
var people = [
    { name: 'Adam', age: 22 },
    { name: 'Bob', age: 23 },
    { name: 'Chuck', age: 24 },
    { name: 'Dave', age: 20 },
    { name: 'Ed', age: 19 }

];

for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// function for get Length
function getLength(word) {
    return (word.length)

}

let wordL = getLength('Hello World!');
if (wordL % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!');

}

