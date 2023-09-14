// Variables
// var, let, const

let my_name = 'pavan nambi';
console.log(my_name);

const some_other_name = 'john';
const i_am_a_array = [1, 2, 3, 4, 5];

// i_am_a_array = [1, 2, 3, 4, 5, 6]; // this will throw an error
i_am_a_array.push(6); // this will work

const json_object = {
    'name':'pavan',
    'age': 20,
}

json_object.age = 21

console.log(json_object);


// multiple variables or constants
const a =10, b = 20, c = 30;n


// logs to console
console.log('Hello, World!');

// warning
console.warn('This is a warning');

// error
console.error('This is an error');

// logs the object like a table
console.table({"name": "John", "age": 30, "city": "New York"})

// grouping
console.group('Group 1');
console.log('Hello');
console.log('World');
console.groupEnd();

// using styles
// prints hello world with the css styles applied to it
console.log('%c Hello World', 'color: blue; font-size: 20px');
