// Primitive data types -- STORED IN STACK
// 1. Number - all numbers, integers, floats, etc
// 2. String - all strings
// 3. Boolean - true or false
// 4. Null - null, INTENTIONAL absence of value
// 5. Undefined - valued thts not defined yet, UNINTENTIONAL absence of value
// 6. Symbols  - object whose constructor returns a unique symbol
// 7. BigInt - num greeater than "number" type can hold

// reference data types -- STORED IN HEAP and accessed by reference
// non primitive data types and when assigned to a variable, the variable holds a reference to that value
// arrays, object literals, functions, dates, etc


console.log(typeof 10);

console.log(typeof null); // this returns object

// symbol
const sym = Symbol('id');

// bigint
const n = 9007199254740911n;

// reference data types
// arrays
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);// this returns object

function oi(){
    console.log('olaa');

}

console.log(typeof oi);// this returns function


/*************************************************************

how primite and reference data types are stored in memory

**************************************************************/


// stored in stack , store there values not reference
const f_name = 'pavan';
const l_name = 'nambi';

// stored in heap, store reference to the value
const person = {
    'name': 'pavan',
    'age': 20,
};


let new_f_name = f_name; // here new_f_name stores value of f_name
new_f_name = 'john'; // here new_f_name stores new value but f_name still stores old value


let new_person = person; // here new_person stores reference to person
new_person.name = 'john'; // here new_person changes the value of person as it stores reference to person so person also changes



/*************************************************************

                        type conversion

**************************************************************/

let my_age = '20';

// my_age = parseInt(my_age); // converts string to int
// my_age = Number(my_age); // converts string to number
my_age = +my_age; // converts string to number


// change number to string
my_age = my_age.toString();
// when my_age is a number which is a primitve data type how can it have a method toString()? as methods are for reference data types aka objects?
// js creates a temporary wrapper object around the primitive value and calls the method on that object
// Primitives are not objects. When you call a method on them they are temporarily wrapped in an object and unwrapped when the method is executed.
//  look at this for more info if u forgot u dumbass
//  https://www.reddit.com/r/learnjavascript/comments/v9qgaa/everything_in_javascript_is_an_objectwhat_about/ibyfw8m/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

console.log(typeof my_age);


// convert to boolean
let my_age_bool = Boolean(my_age);


/*************************************************************

                        type corecision

**************************************************************/


let idk;

idk = 1+'12';//js converts tht 1 into string so we get 112


idk = 5*'12';//here it converts string into number

idk = 15+null // we get 5 as number , here null gets corecred into number

console.log(idk);
