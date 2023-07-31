// Javascript Hoisting

// Rewrite the code the way it would be seen by the interpreter and predict the output

// 1. 
var hello; 
console.log(hello);                                   
hello = 'world'; 
// Output: undefined

// 2. 
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// Output: magnet

// 3. 
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool'
console.log(brendan);
// Output: 'super cool'

// 4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}