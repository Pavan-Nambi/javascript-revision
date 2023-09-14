// strings are primitive data types and stored in stack

let my_name = 'pavan';
let my_age = 23;
let my_string = `hello i m ${my_name} and my age is ${my_age}`;

console.log(my_string);

let length = my_name.length;    // length is a property of string so we dont need to use () to call it

let get_char = my_name[0];      // we can access characters of string using index

let get_it =  my_name.__proto__; // we can access prototype of string using __proto__

my_name.charAt(0);              // we can access characters of string using charAt() method

my_name.indexOf('a');           // we can access index of a character in string using indexOf() method

my_name.lastIndexOf('a');       // we can access last index of a character in string using lastIndexOf() method

my_name.indexOf('a', 2);        // we can access index of a character in string using indexOf() method from a particular index

my_name.substring(0, 3);        // we can access substring of a string using substring() method

my_name.toLowerCase();          // we can convert string to lowercase using toLowerCase() method

my_name.toUpperCase();          // we can convert string to uppercase using toUpperCase() method

my_name.slice(0, 3);            // we can access substring of a string using slice() method
// difference between substring() and slice() is that substring() cannot accept negative indexes but slice() can

my_name.split('');              // we can split a string into array using split() method

my_name.replace('p', 'j');      // we can replace a character in string using replace() method

my_name.includes('p');          // we can check if a string contains a character using includes() method

my_name.trim();                 // we can remove extra spaces from a string using trim() method

my_name.valueOf();              // we can get value of a string using valueOf() method



/*************************************************************
 *                    numbers
 *
 * **************************************************************/

let my_num = 2.123;
my_num.toFixed(2);              // we can get number with fixed decimal places using toFixed() method
my_num.toPrecision(2);          // we can get number with fixed total digits using toPrecision() method aka 2.1
my_num.toString();              // we can convert number to string using toString() method

max = Number.MAX_VALUE;         // we can get max value of number using Number.MAX_VALUE
min = Number.MIN_VALUE;         // we can get min value of number using Number.MIN_VALUE
infinity = Number.POSITIVE_INFINITY; // we can get infinity value of number using Number.POSITIVE_INFINITY

