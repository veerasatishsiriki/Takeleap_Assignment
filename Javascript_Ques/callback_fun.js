function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// Calling the function
greet('Alice', sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
