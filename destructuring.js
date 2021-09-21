/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let langs = ["English", "French", "Spanish", "German", "Japanese"];
let [johnNative, johnSecondary] = langs;
console.log(johnNative, johnSecondary);

let [,,maryNative, marySecondary] = langs
console.log(maryNative, marySecondary);

let langs2 = {
    firstLang: "english",
    secondLang: "french",
    thirdLang: "german",
    fourthLang: "japanese",
};
let {firstLang, thirdLang} = langs2
console.log(firstLang, thirdLang);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

